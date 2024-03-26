const repository = require("./state.repository");

async function stateService(req) {
  const { page, limit } = req.query;
  // edit validation for page and limit
  const repositoryResponse = await repository.getAllState(req, page, limit);
  return repositoryResponse;
}

async function stateServiceByName(req) {
  const { uuid } = req.body;
  // edit validation for name
  const responseByName = await repository.getStateByName(req, uuid);
  return responseByName;
}

module.exports = {
  stateService,
  stateServiceByName,
};
