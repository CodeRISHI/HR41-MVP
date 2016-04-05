angular.module('mars.services', [])

.factory('Pictures', function($http) {
  var getCuriosity = function(day, camera) {
    return $http({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + day + '&camera=' + camera + '&api_key=m83nQsNKsLPYhrnbCI38OFVUPYJeXjDnPLBGxqOS',
      method: 'GET',
    });
  };

  return {
    getCuriosity: getCuriosity
  };
});