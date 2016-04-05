var cameraRouter = require('express').Router();

var cameraController = require('../controllers/cameraController.js');

// Declare routes for our resource endpoints and specify what controller method we're going to use for each
cameraRouter.route('/')
               .post(cameraController.createOne)
               .get(cameraController.retrieve)
               .delete(cameraController.delete);

cameraRouter.route('/:id')
               .get(cameraController.retrieveOne)
               .put(cameraController.updateOne)
               .delete(cameraController.deleteOne);              

module.exports = cameraRouter;