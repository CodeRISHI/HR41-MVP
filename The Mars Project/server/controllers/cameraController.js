var Camera = require('../models/Camera.js');

// Create our necessary controller methods to perform all needed CRUD actions

exports.createOne = function(req, res) {
  var newCamera = req.body;
  Camera.create(newCamera, function(err, newCamera) {
    if (err) {
      return res.json(err);
    }
    res.json(newCamera);
  });
};

exports.retrieveOne = function(req, res) {
  var query = {_id: req.params.id};
  Camera.findOne(query, function(err, matchingCamera) {
    if (err) {
      return res.json(err);
    }
    res.json(matchingCamera);
  });
};

//get all
exports.retrieve = function(req, res) {
  var query = req.query;
  Camera.find(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
};

//update one
exports.updateOne = function(req, res) {
  var query = {_id: req.params.id};
  var updatedProps = req.body;
  var options = {
    new: true,
    upsert: true,
  };
  Camera.findOneAndUpdate(query, updatedProps, options, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
};

//delete one
exports.deleteOne = function(req, res) {
  var query = {_id: req.params.id};
  Camera.findOneAndRemove(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
};

//delete all
exports.delete = function(req, res) {
  var query = req.query;
  Camera.find(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    Camera.remove(query, function(err, response) {
      if (err) {
        return res.json(err);
      }
      res.json(response);
    });
  });
};
