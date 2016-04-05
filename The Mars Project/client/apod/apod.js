angular.module('mars.apod', [])

.controller('ApodController', function($scope, Pictures) {
  //APOD photo
  $scope.apod = {};

  $scope.showAPOD = function() {
    Pictures.getAPOD()
    .then(function(resp) {
      $scope.apod = resp.data;
      console.log($scope.apod);
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});