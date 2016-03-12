'use strict';

var express = require('express');
var app = express();
var router = require('./api');

app.use('/', express.static('public'));


// TODO: Add POST route for create new entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entries

app.use('/api', router);

app.listen(3000, function() {
  console.log("The server is running on port 3000.");
});
