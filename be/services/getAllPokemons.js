const { v4: uuidv4 } = require("uuid");

async function getAllPokemons(collection) {
  const getPokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0`
  );
  const docs = await getPokemons.json();
  const options = { ordered: true };
  docs.results.forEach((pokemon, pokemonIndex) => {
    pokemon["uuid"] = uuidv4();
  });
  await collection.insertMany(docs.results, options);
  return await collection.find({}, { projection: { _id: 0 } }).toArray();
}

module.exports = {
  getAllPokemons,
};
