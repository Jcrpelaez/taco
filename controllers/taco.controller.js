var express = require("express");
var router = express.Router();
var taco = require("../models/taco.js");

router.get("/", function(req, res) {
  res.render("index");
});

module.exports = router;
