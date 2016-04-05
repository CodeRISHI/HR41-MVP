angular.module('mars.pictures', [])

.controller('PicturesController', function($scope, Pictures) {
  $scope.photos = {};

  $scope.showPic = function(cam) {
    Pictures.getCuriosity(cam)
    .then(function(resp) {
      $scope.photos = resp.data;
      console.log($scope.photos);
    })
    .catch(function(err) {
      console.log(err);
    });
  };

  //TEST
  // $scope.showPic('MAST');

});