require('./db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('./utils/Jwt');
const errorHandler = require('./utils/ErrorHandler');

app.use(express.static('public'))
    .use(jwt())
    .use(errorHandler)
    .use(require('./route'))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(cors())
    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

module.exports = app;