var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(port, function () {
    console.log("You are listening on port " + port);
});

