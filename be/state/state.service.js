const repository = require("./state.repository");

async function stateService(req) {
  try {
    const { page, limit } = req.query;
    // edit validation for page and limit
    const repositoryResponse = await repository.getAllState(req, page, limit);
    return repositoryResponse;
  } catch (error) {
    throw error;
  }
}

async function addToFavService(req) {
  try {
    const { uuid, favorite } = req.body;
    // edit validation for uuid and favorite
    const responseFav = await repository.editFields(req);
    return responseFav;
  } catch (error) {
    throw error;
  }
}

async function editName(req) {
  try {
    const { uuid, name } = req.body;
    // edit validation for uuid and favorite
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
