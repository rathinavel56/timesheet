require('./db');
const express = require('express');
const app = express();
//import router file
const apiV1 = require('./route');

   app
    .use(apiV1);

module.exports = app;