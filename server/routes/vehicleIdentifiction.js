const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { vehicleRegister } = require("../models");

router.post("/", async (req, res) => {
  const post = req.body;

  const vehicleInfo = await vehicleRegister.findOne({
    where: { vehicleUniqueId: post.uniqueid },
  });
  res.send(vehicleInfo);
});

module.exports = router;
