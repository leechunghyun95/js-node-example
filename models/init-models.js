var DataTypes = require("sequelize").DataTypes;
var _user = require("./user");
var _user_login_method = require("./user_login_method");

function initModels(sequelize) {
  var user = _user(sequelize, DataTypes);
  var user_login_method = _user_login_method(sequelize, DataTypes);

  user_login_method.belongsTo(user, {
    as: "user_idx_user",
    foreignKey: "user_idx",
  });
  user.hasMany(user_login_method, {
    as: "user_login_methods",
    foreignKey: "user_idx",
  });

  return {
    user,
    user_login_method,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
