angular.module('mars.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.login = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.mars', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.mars', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});