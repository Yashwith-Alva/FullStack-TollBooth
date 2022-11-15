const express = require("express");
const router = express.Router();
const { user_info, user_reg, vehicleRegister } = require("../models");

router.get("/", async (req, res) => {
  const ListUsers = await user_info.findAll();
  res.json(ListUsers);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const vehicleReg = await vehicleRegister.findByPk(id);
  res.send(vehicleReg);
});

router.post("/", async (req, res) => {
  const post = req.body;
  const findemail = await user_info.findOne({
    where: { email: post.emailId },
  });
  if (findemail == null) {
    const findPhone = await user_info.findOne({
      where: { phone: post.phone },
    });
    if (findPhone == null) {
      if (post.password == post.confirmpassword) {
        res.send("User created successfully!");
        await user_info.create({
          username: post.username,
          email: post.emailId,
          phone: post.phone,
          age: post.age,
          gender: post.gender,
          address: post.address,
        });

        await user_reg.create({
          username: post.username,
          password: post.password,
        });

        await vehicleRegister.create({
          vehicleUniqueId: null,
          vehicleType: null,
          LicensePlate: null,
          moneyStored: 500,
          dlno: null,
        });
      } else {
        res.send("Password isn't matching!");
      }
    } else {
      res.send("Phone nnumber already exists!");
    }
  } else {
    res.send("There is already a user with the existing mail!!");
  }
});

module.exports = router;
