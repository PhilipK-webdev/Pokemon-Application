const repository = require("./state.repository");

async function stateService(req) {
  const { page, limit, offset } = req.query;
  // edit validation for page and limit
  const repositoryResponse = await repository.getAllState(
    req,
    page,
    limit,
    offset
  );
  return repositoryResponse;
}

async function addToFavService(req) {
  const { uuid, favorite } = req.body;
  // edit validation for uuid and favorite
  const responseByName = await repository.addToFavorite(req, uuid, favorite);
  return responseByName;
}

module.exports = {
  stateService,
  addToFavService,
};
