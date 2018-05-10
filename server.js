var express = require("express");
var bodyParser = require("body-parser");
var PORT = 3000;
var app = express();

// var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgercontroller.js")
app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });