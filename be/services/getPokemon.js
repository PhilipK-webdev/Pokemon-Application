async function getPokemon(collection, database, uuid) {
  collection = database.collection(process.env.COLLECTION);
  let result = await collection
    .find({ uuid: uuid }, { projection: { _id: 0 } })
    .toArray();
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${result[0].name}`
  );
  const docs = await pokemon.json();
  const options = { ordered: true };
  collection = database.collection(process.env.COLLECTION_BY_NAME);
  await collection.insertOne(docs, options);
  return await collection.find({}, { projection: { _id: 0 } }).toArray();
}

module.exports = {
  getPokemon,
};
