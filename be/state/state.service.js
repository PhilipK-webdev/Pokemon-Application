const repository = require("./state.repository");

async function stateService(req) {
  try {
    const { page, limit } = req.query;
    if (!page || !limit) {
      return { error: "Invalid input" };
    }
    const repositoryResponse = await repository.getAllState(req, page, limit);
    return repositoryResponse;
  } catch (error) {
    throw error;
  }
}

async function addToFavService(req) {
  try {
    const { uuid, favorite } = req.body;

    if (!uuid || typeof uuid !== "string" || typeof favorite !== "boolean") {
      return { error: "Invalid input" };
    }
    const responseFav = await repository.editFields(req);
    return responseFav;
  } catch (error) {
    throw error;
  }
}

async function editName(req) {
  try {
    const { uuid, name } = req.body;
    if (
      !uuid ||
      !name ||
      typeof uuid !== "string" ||
      typeof name !== "string"
    ) {
      return { error: "Invalid input" };
    }
    const responseEditName = await repository.editFields(req);
    return responseEditName;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  stateService,
  addToFavService,
  editName,
};
