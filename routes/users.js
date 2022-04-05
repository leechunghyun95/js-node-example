var sequelize = require("../models/index");
var express = require("express");
var router = express.Router();

var initModels = require("../models/init-models");
var models = initModels(sequelize);

router.get("/", (req, res, next) => {
  models.user
    .findAll()
    .then((users) => res.json(users))
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
