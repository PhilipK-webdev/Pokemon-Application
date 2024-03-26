async function getPokemon(collection, database, uuid) {
  collection = database.collection(process.env.COLLECTION);
  let result = await collection
    .find({ uuid: uuid }, { projection: { _id: 0 } })
    .toArray();
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${result[0].name}`
  );
  const docs = await pokemon.json();
  const pokemonData = {
    uuid: result[0].uuid,
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
      .map((t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1))
      .join(", "),
    stats: docs.stats.map((s) => {
      return {
        base: s.base_stat,
        name: s.stat.name,
      };
    }),
    url: docs.sprites.front_default,
    species:
      docs.species.name.charAt(0).toUpperCase() + docs.species.name.slice(1),
    moves: docs.moves.map((m) => m.move.name),
  };
  const options = { ordered: true };
  collection = database.collection(process.env.COLLECTION_BY_NAME);

  await collection.insertOne(pokemonData, options);
  console.log("here");
  return await collection.find({}, { projection: { _id: 0 } }).toArray();
}

module.exports = {
  getPokemon,
};
