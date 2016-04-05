angular.module('mars.services', [])

.factory('Pictures', function($http) {
  var getCuriosity = function(camera) {
    return $http({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=' + camera + '&api_key=m83nQsNKsLPYhrnbCI38OFVUPYJeXjDnPLBGxqOS',
      method: 'GET',
    });
  };

  return {
    getCuriosity: getCuriosity
    // getCuriosityFHAZ: getCuriosityFHAZ,
    // getCuriosityRHAZ: getCuriosityRHAZ,
    // getCuriosityMAST: getCuriosityMAST,
    // getCuriosityCHEMCA: getCuriosityCHEMCA,
    // getCuriosityMAHLI: getCuriosityMAHLI, 
    // getCuriosityMARDI: getCuriosityMARDI, 
    // getCuriosityNAVCAM: getCuriosityNAVCAM, 
  };
});