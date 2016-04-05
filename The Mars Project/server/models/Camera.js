var mongoose = require('mongoose');

// Flesh out our Camera schema and register the model with Mongoose

var cameraSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  landingDate: String,
  imageUrl: String
});

var Camera = mongoose.model('Camera', cameraSchema);

module.exports = Camera;