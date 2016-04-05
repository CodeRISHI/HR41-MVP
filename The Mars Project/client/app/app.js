angular.module('mars', [ 'mars.services',
  'mars.pictures',
  'mars.apod',
  'ngRoute'
  ])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../pictures/pictures.html',
      controller: 'PicturesController'
    })
    .when('/apod', {
      templateUrl: '../apod/apod.html',
      controller: 'ApodController'
    })
    // .when('/login', {
    //   templateUrl: 'app/auth/login.html',
    //   controller: 'AuthController'
    // })
    // .when('/signup', {
    //   templateUrl: 'app/auth/signup.html',
    //   controller: 'AuthController'
    // })
    .otherwise({
      redirectTo: '/'
    });
});