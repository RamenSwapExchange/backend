var express = require('express');
require('dotenv').config()
var path = require('path');
var logger = require('morgan');
const router = require('./routes/router')
const dbConnector = require("./middleware/DatabaseConnector")

var cors = require("cors");
var app = express();

//app.use(dbConnector)
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', router)

module.exports = app;