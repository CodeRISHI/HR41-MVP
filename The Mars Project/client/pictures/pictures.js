angular.module('mars.pictures', [])

.controller('PicturesController', function($scope, Pictures) {
  //rover photos
  $scope.photos = {};

  $scope.showPic = function(day, cam) {
    Pictures.getCuriosity(day, cam)
    .then(function(resp) {
      $scope.photos = resp.data;
      console.log($scope.photos);
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});