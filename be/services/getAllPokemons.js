const { v4: uuidv4 } = require("uuid");

async function getAllPokemons(collection) {
  try {
    const getPokemons = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=151`
    );

    const docs = await getPokemons.json();
    let promises = docs.results.map((doc) => fetch(`${doc.url}`));
    const response = await Promise.all(promises);
    const resolveResponse = response.map(async (r) => await r.json());
    let data = [];
    for (let i = 0; i < resolveResponse.length; i++) {
      const docs = await resolveResponse[i];
      data[i] = {
        uuid: uuidv4(),
        abilities: docs.abilities
          .map(
            (ab) =>
              ab.ability.name.charAt(0).toUpperCase() + ab.ability.name.slice(1)
          )
          .join(", "),
        height: docs.height,
        weight: docs.weight,
        name: docs.name,
        types: docs.types
          .map(
            (t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)
          )
          .join(", "),
        stats: docs.stats.map((s) => {
          return {
            base: s.base_stat,
            name: s.stat.name,
          };
        }),
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          i + 1
        }.svg`,
        species:
          docs.species.name.charAt(0).toUpperCase() +
          docs.species.name.slice(1),
        moves: docs.moves.map((m) => m.move.name),
      };
    }
    const options = { ordered: true };
    await collection.insertMany(data, options);
    return await collection.find({}, { projection: { _id: 0 } }).toArray();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllPokemons,
};
