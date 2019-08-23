require('./db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//import router from versioning folder
const apiV1 = require('./route');
const path = require('path');

var allowedExt = [
	'.js',
	'.ico',
	'.css',
	'.png',
	'.jpg',
	'.jpeg',
	'.woff2',
	'.woff',
	'.ttf',
	'.svg'
];

   app
    .use(express.static('public'))
    .use(apiV1)
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(cors())
    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
   .get('*', function(req, res) {
   	var fileName = req.url.split('.').pop();
        if (allowedExt.indexOf('.' + fileName) == 0) {
       	   res.sendFile(path.resolve(`public/`${req.url})); 	
        } else {
           res.sendFile(path.resolve('public/index.html'));	
        }
   });

module.exports = app;
