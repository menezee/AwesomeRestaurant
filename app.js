var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var firebase = require("firebase");
var fs = require("fs");

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.disable('etag');  

app.use('/users', require('./routes/users'));
app.use('/restaurants', require('./routes/restaurants'));

// Initialize the app with a service account, granting admin privileges
firebase.initializeApp({
  serviceAccount: "./database/AwesomeRestaurant-bbb1d07570f5.json",
  databaseURL: "https://awesomerestaurant-3b117.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = firebase.database();
ref = db.ref("data");


module.exports = app;
