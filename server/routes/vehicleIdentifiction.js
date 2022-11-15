const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { vehicleRegister } = require("../models");

router.post("/", async (req, res) => {
  const post = req.body;

  const vehicleInfo = await vehicleRegister.findOne({
    where: { vehicleUniqueId: post.uniqueid },
  });

  if (vehicleInfo != null) {
    res.send(vehicleInfo);
  } else {
    res.send(false);
  }
});

module.exports = router;
