const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "user",
    {
      idx: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      birth_date: {
        type: DataTypes.STRING(14),
        allowNull: true,
      },
      gender: {
        type: DataTypes.CHAR(1),
        allowNull: true,
      },
      phone: {
        type: DataTypes.CHAR(13),
        allowNull: true,
      },
      is_premium: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      family_idx: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      role: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "user",
      timestamps: false,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "idx" }],
        },
      ],
    }
  );
};
