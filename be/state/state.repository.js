const { MongoClient } = require("mongodb");
const { getAllPokemons } = require("../services/getAllPokemons");

const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function getAllState(req, page, limit) {
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
    throw error;
  }
}

async function editFields(req) {
  try {
    await client.connect();
    const database = client.db(process.env.DB);
    const collection = database.collection(process.env.COLLECTION);
    const { uuid, ...obj } = req.body;
    const filter = { uuid: uuid };
    const updateData = { $set: { ...obj } };
    return await collection.updateOne(filter, updateData);
  } catch (error) {
    return new Error("Failed to fetch from DB");
  }
}

module.exports = {
  getAllState,
  editFields,
};
