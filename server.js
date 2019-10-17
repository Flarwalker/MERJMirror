'use strict';

// ENV file Read in
var dotenv = require('dotenv-safe');

dotenv.config({
  allowEmptyValues: false,
  example: './env/.env.example',
  path: './env/.env'
});

// Modules
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var path = require('path');

// Config File Variable
var layout = require('./layout.json');

// Express App
var app = express();

// Sets up the JSON to allow GET and POST operations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sets up the access to the CSS, JS, and WIDGETS folders
app.use('/css', express.static(path.resolve(__dirname + '/css')));
app.use('/js', express.static(path.resolve(__dirname + '/js')));
app.use('/widgets', express.static(path.resolve(__dirname + '/widgets')));

// Servers the webpage
app.get('/', function (req, res) {
  res.send(fs.readFileSync(path.resolve(__dirname + '/index.html'), { encoding: 'utf8' }));
});

// Send the Layout JSON file
app.get('/layout', function (req, res) {
  layout = JSON.parse(fs.readFileSync('layout.json', 'utf8'));
  res.send(JSON.parse(fs.readFileSync('layout.json', 'utf8')));
});

// Starts the server
app.listen(process.env.PORT, function () {
  console.log(`Server running on port ${process.env.PORT}`);
  console.log(`Visit http://localhost:${process.env.PORT} to view`);
});
