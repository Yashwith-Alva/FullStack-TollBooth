const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connect
const db = require("./models");

const userLogRouter = require("./routes/usersLog");
app.use("/usersLog", userLogRouter);

const userInfoRouter = require("./routes/usersReg");
app.use("/usersReg", userInfoRouter);

const vehicleRegRouter = require("./routes/vehicleRegister");
app.use("/vehicleRegister", vehicleRegRouter);

const vehicleIdentifyRouter = require("./routes/vehicleIdentifiction");
app.use("/vehicleIdentification", vehicleIdentifyRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server started at port 3001");
  });
});
