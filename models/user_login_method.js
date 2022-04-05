const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "user_login_method",
    {
      idx: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      social_id: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      fb_uid: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      method: {
        type: DataTypes.CHAR(4),
        allowNull: true,
      },
      user_idx: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "user",
          key: "idx",
        },
      },
    },
    {
      sequelize,
      tableName: "user_login_method",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "idx" }],
        },
        {
          name: "fk_user_idx_idx",
          using: "BTREE",
          fields: [{ name: "user_idx" }],
        },
      ],
    }
  );
};
