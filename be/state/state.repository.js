const { MongoClient } = require("mongodb");
const { getAllPokemons } = require("../services/getAllPokemons");
const { getPokemon } = require("../services/getPokemon");

async function getAllState(req, page, limit) {
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db(process.env.DB);
    const collection = database.collection(process.env.COLLECTION);
    let result = await collection
      .find({}, { projection: { _id: 0 } })
      .toArray();
    if (!result || !result.length) {
      result = await getAllPokemons(collection);
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const pokemonData = result.slice(startIndex, endIndex);
    return pokemonData;
  } catch (error) {
    return new Error("Failed to fetch from DB");
  }
}

async function getStateByName(req, uuid) {
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db(process.env.DB);
    let collection = database.collection(process.env.COLLECTION_BY_NAME);
    const result = await collection
      .find({ uuid: `${uuid}` }, { projection: { _id: 0 } })
      .toArray();
    if (!result || !result.length) {
      return await getPokemon(collection, database, uuid);
    }
    return result;
  } catch (error) {
    return new Error("Failed to fetch from DB");
  }
}

module.exports = {
  getAllState,
  getStateByName,
};
