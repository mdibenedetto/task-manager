'use strict';

var dbmanager = require('./app/common/dbmanager');
dbmanager.load();

var express = require('express');
var app = express();
// configure app to use bodyParser()
// this will let us get the data from a POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

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
// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);
// =============================================================================
// START THE SERVER
// =============================================================================
var port = process.env.PORT || 8081;
app.listen(port);
console.log('Magic happens on port ' + port + '...');