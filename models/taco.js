var orm = require("../config/orm.js");

var taco = {
  selectAll: function(cb) {
    orm.selectAll("tacos", function(res) {
      cb(res);
    });
  }
};

module.exports = taco;
