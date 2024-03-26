const express = require("express");
const router = express.Router();
const service = require("./state.service");
router.route("/").get(async (req, res) => {
  try {
    const result = await service.stateService(req);
    return res.json(result);
  } catch (error) {}
});

router.route("/pokemon").post(async (req, res) => {
  try {
    const result = await service.stateServiceByName(req);
    return res.json(result);
  } catch (error) {}
});

router.route("/fav").post(async (req, res) => {
  try {
    const result = await service.addToFavService(req);
    return res.json(result);
  } catch (error) {}
});

module.exports = router;
