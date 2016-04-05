var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 8000;
var dbUri = 'mongodb://localhost/themarsproject';

var app = express();

// app.use(express.static('client')); <--TEST

var cameraRouter = require('./routers/cameraRouter');

mongoose.connect(dbUri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/camera', function(req, res) {
  res.json({message: 'The Mars Project'});
});

app.use('/api/camera', cameraRouter);

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('The Mars Project listening on ' + port);
});  

module.exports = app;