const repository = require("./state.repository");

async function stateService(req) {
  const { page, limit } = req.query;
  // edit validation for page and limit
  const repositoryResponse = await repository.getAllState(req, page, limit);
  return repositoryResponse;
}

async function addToFavService(req) {
  const { uuid, favorite } = req.body;
  // edit validation for uuid and favorite
  const responseFav = await repository.editFields(req);
  return responseFav;
}

async function editName(req) {
  const { uuid, name } = req.body;
  // edit validation for uuid and favorite
  const responseEditName = await repository.editFields(req);
  return responseEditName;
}

module.exports = {
  stateService,
  addToFavService,
  editName,
};
