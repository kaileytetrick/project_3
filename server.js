require("dotenv");
var mongoose = require("mongoose");
require('./config/dbConnection')(mongoose);
var express = require("express");
var app = express();

var PORT = 5500;

app.listen(PORT, function() {
    console.log("listening on " + PORT);
})