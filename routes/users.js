var express = require('express');
var models = require("../models");

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User
    .findAll()
    .then(function(user, created){
      res.send({"user": user});
  });
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  var {name, password} = req.body;
  models.User
    .findOrCreate({where: {name: name}, defaults: {password: password}})
    .spread(function(user, created) {
      res.send(created);
    });
});


module.exports = router;