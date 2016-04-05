var mongoose = require('mongoose');

// Flesh out our Character schema and register the model with Mongoose

var cameraSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  landingDate: String,
  imageUrl: String
});

var Camera = mongoose.model('camera', cameraSchema);

module.exports = Camera;