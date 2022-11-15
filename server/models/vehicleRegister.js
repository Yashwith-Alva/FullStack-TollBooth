module.exports = (sequelize, DataTypes) => {
  const vehicleRegister = sequelize.define(
    "vehicleRegister",
    {
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      vehicleUniqueId: {
        type: DataTypes.STRING,
      },
      vehicleType: {
        type: DataTypes.STRING,
      },
      LicensePlate: {
        type: DataTypes.STRING,
      },
      moneyStored: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 500,
      },
      dlno: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );

  return vehicleRegister;
};
