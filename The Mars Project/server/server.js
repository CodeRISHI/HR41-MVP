var express = require('express');
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 8000;
var dbUri = process.env.MONGOLAB_URI || 'mongodb://localhost/themarsproject';

var app = express();

// app.use(express.static('client'));
var pictureRouter = require('./routers/pictureRouter');

mongoose.connect(dbUri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.json({message: 'The Mars Project'});
});

// // TODO: Use the pictureRouter as middleware on the '/api/pictures' route
app.use('/api/pictures', pictureRouter);

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('The Mars Project listening on ' + port);
});  

module.exports = app;