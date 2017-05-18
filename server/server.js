'use strict';
var config = require('./config');
var dbmanager = require('./app/common/dbmanager');
dbmanager.load(config);

var express = require('express');
var app = express();
// configure app to use bodyParser()
// this will let us get the data from a POST
var bodyParser = require('body-parser');
// =============================================================================
//SESSION
// =============================================================================
var session = require('express-session');

//initialize session
app.use(session({
    secret: 'ssshhhhh',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});
//run static resource
// var __projectRoot = __dirname + '/../client/dist/';
// app.use(express.static(__projectRoot));
app.use(express.static(__dirname));
// =============================================================================
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// middleware to use for all requests
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});
//TASK ROUTER
var routeTask = require('./app/routes/task-route.js');
routeTask.load(router);
//USER ROUTER
var routeUser = require('./app/routes/user-route.js');
routeUser.load(router);

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);
// =============================================================================
// START THE SERVER
// =============================================================================  
app.listen(config.port);
console.log('Magic happens on port ' + config.port + '...');