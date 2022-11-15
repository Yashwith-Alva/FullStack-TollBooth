module.exports = (sequelize, DataTypes) => {
  const user_reg = sequelize.define("user_reg", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return user_reg;
};

/*
User_Reg.associate = (models) => {
  User_Reg.hasMany(models.user_info, {
    onDelete: "cascade",
  });
};

*/
