const express = require("express");
const router = express.Router();
const state = require("./state/state.route");
const routes = (server) => {
  router.use("/state", state);
  return router;
};

module.exports = routes;
