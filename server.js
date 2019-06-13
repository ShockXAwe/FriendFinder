var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up routing for apiRoutes.js
require("./app/routing/apiRoutes")(app);
// Sets up routing for htmlRoutes.js
require("./app/routing/htmlRoutes")(app, path);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  