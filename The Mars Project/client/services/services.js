angular.module('mars.services', [])

.factory('Pics', function($http) {
  var getCuriosityFHAZ = function() {
    return $http({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=m83nQsNKsLPYhrnbCI38OFVUPYJeXjDnPLBGxqOS',
      method: 'GET',
    }).then(function success(resp) {
      console.log(data.photos[0].img_src);
      return data.photos[0].img_src;
    }, function error(err) {
      throw err;
    });
  };

  var getCuriosityRHAZ = function() {
    return $http({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=rhaz&api_key=m83nQsNKsLPYhrnbCI38OFVUPYJeXjDnPLBGxqOS',
      method: 'GET',
    }).then(function success(resp) {
      console.log(data.photos[0].img_src);
      return data.photos[0].img_src;
    }, function error(err) {
      throw err;
    });
  };

  var getCuriosityMAST = function() {
    return $http({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=m83nQsNKsLPYhrnbCI38OFVUPYJeXjDnPLBGxqOS',
      method: 'GET',
    }).then(function success(resp) {
      console.log(data.photos[0].img_src);
      return data.photos[0].img_src;
    }, function error(err) {
      throw err;
    });
  };

  var getCuriosityCHEMCAM = function() {
    return $http({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=chemcam&api_key=m83nQsNKsLPYhrnbCI38OFVUPYJeXjDnPLBGxqOS',
      method: 'GET',
    }).then(function success(resp) {
      console.log(data.photos[0].img_src);
      return data.photos[0].img_src;
    }, function error(err) {
      throw err;
    });
  };

  var getCuriosityMAHLI = function() {
    return $http({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mahli&api_key=m83nQsNKsLPYhrnbCI38OFVUPYJeXjDnPLBGxqOS',
      method: 'GET',
    }).then(function success(resp) {
      console.log(data.photos[0].img_src);
      return data.photos[0].img_src;
    }, function error(err) {
      throw err;
    });
  };

  var getCuriosityMARDI = function() {
    return $http({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mardi&api_key=m83nQsNKsLPYhrnbCI38OFVUPYJeXjDnPLBGxqOS',
      method: 'GET',
    }).then(function success(resp) {
      console.log(data.photos[0].img_src);
      return data.photos[0].img_src;
    }, function error(err) {
      throw err;
    });
  };

  var getCuriosityNAVCAM = function() {
    return $http({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=m83nQsNKsLPYhrnbCI38OFVUPYJeXjDnPLBGxqOS',
      method: 'GET',
    }).then(function success(resp) {
      console.log(data.photos[0].img_src);
      return data.photos[0].img_src;
    }, function error(err) {
      throw err;
    });
  };

  return {
    getCuriosityFHAZ: getCuriosityFHAZ,
    getCuriosityRHAZ: getCuriosityRHAZ,
    getCuriosityMAST: getCuriosityMAST,
    getCuriosityCHEMCA: getCuriosityCHEMCA,
    getCuriosityMAHLI: getCuriosityMAHLI, 
    getCuriosityMARDI: getCuriosityMARDI, 
    getCuriosityNAVCAM: getCuriosityNAVCAM, 
  };
});