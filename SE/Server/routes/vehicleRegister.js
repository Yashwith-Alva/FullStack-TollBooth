const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { vehicleRegister } = require("../models");

// Access DB, check if the vehicle is already registered, using

router.post("/", async (req, res) => {
  const post = req.body;
  const findLP = await vehicleRegister.findOne({
    where: { LicensePlate: post.LicensePlate },
  });

  if (findLP == null) {
    res.send(true);
    var uniqueId = "A102002";

    //Check if driver license is valid?
    await vehicleRegister.create({
      firstname: post.firstname,
      lastname: post.lastname,
      LicensePlate: post.LicensePlate,
      vehicleUniqueId: uniqueId,
      vehicleType: post.vehicleType,
      moneyStored: 500,
      dlno: post.dlno,
    });
  } else {
    res.send(false);
  }
});

module.exports = router;
