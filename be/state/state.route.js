const express = require("express");
const router = express.Router();
const service = require("./state.service");
router.route("/").get(async (req, res) => {
  try {
    const result = await service.stateService(req);
    return res.json(result);
  } catch (error) {
    return res.status(error.code === 8000 ? 500 : 400).json({
      error: error.message,
      errCode: error.code === 8000 ? error.code : 400,
    });
  }
});

router.route("/fav").post(async (req, res) => {
  try {
    const result = await service.addToFavService(req);
    return res.json(result);
  } catch (error) {
    return res.status(error.code === 8000 ? 500 : 400).json({
      error: error.message,
      errCode: error.code === 8000 ? error.code : 400,
    });
  }
});
router.route("/edit").post(async (req, res) => {
  try {
    const result = await service.editName(req);
    return res.json(result);
  } catch (error) {
    return res.status(error.code === 8000 ? 500 : 400).json({
      error: error.message,
      errCode: error.code === 8000 ? error.code : 400,
    });
  }
});

module.exports = router;
