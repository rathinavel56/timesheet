require('./db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//import router from versioning folder
const apiV1 = require('./route');

app.use(express.static('public'))
    .use(apiV1)
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(cors())
    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

module.exports = app;