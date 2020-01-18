// Pull in required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// Set Handlebars as the view engine
var exphbs = require("express-handlebars");

// Sets port to 3000 and allows app to be deployed to heroku
var PORT = process.env.PORT || 3000;

var app = express();
// Serve static content for the app from the 'public' directory
app.use(express.static(__dirname + "/public"));

app.use(methodOverride("_method"));
app.engine(
  "handlebar",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

var routes = require("./controllers/taco.controller.js");
app.use("/", routes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
