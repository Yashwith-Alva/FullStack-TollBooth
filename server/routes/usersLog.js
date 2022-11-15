const express = require("express");
const router = express.Router();
const { user_reg } = require("../models");

router.get("/", async (req, res) => {
  const ListUsers = await user_reg.findAll();
  res.json(ListUsers);
});

router.post("/", async (req, res) => {
  const post = req.body;

  const findUser = await user_reg.findOne({
    where: { username: post.username, password: post.password },
  });

  if (findUser == null) {
    res.send({ id: 0, isValid: false });
  } else {
    var idval = findUser.id;
    res.send({ id: idval, isValid: true });
  }
});
module.exports = router;
