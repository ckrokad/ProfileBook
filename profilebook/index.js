var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var jwt = require("jsonwebtoken");
var redisAdapter = require('socket.io-redis');
var red = require('redis');

var router = require('./api/index');
var redisClient = require('./utils/redis');
var mongo = require('./utils/mongo');
var socket = require('socket.io');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(morgan('dev'));

var port = 8080;


redisClient().then(function(redis) {

    console.log("connected");
    app.get('/', function(req, res) {
        res.send('Hello! The API is at http://localhost:' + port + '/api');
    });
    console.log("req");
    app.use('/api', router);

    var server = app.listen(port);
    console.log('Listening at http://localhost:' + port);

    var io = socket.listen(server);


});