angular.module('mars.services', [])

.factory('Pictures', function($http) {
  var getCuriosity = function(day, camera) {
    return $http({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + day + '&camera=' + camera + '&api_key=m83nQsNKsLPYhrnbCI38OFVUPYJeXjDnPLBGxqOS',
      method: 'GET',
    });
  };

  var storeData = function(dataObj) {
    //store img_src urls in temp array
    var urlArray = [];
    for (var i = 0; i < dataObj.photos.length; i++) {
      urlArray.push(dataObj.photos[i].img_src);
    }

    var cameraObj = {
      name: dataObj.photos[0].camera.full_name,
      landingDate: dataObj.photos[0].earth_date,
      imageUrl: urlArray
    };

    return $http({
      method: 'POST',
      url: '/api/camera',
      data: JSON.stringify(cameraObj),
    })
    .then(function(resp) {
      console.log(resp); //if successful
    }, function(resp) {
      console.log(resp); //if error
    });
  };

  var getAPOD = function() {
    return $http({
      url: 'https://api.nasa.gov/planetary/apod?&hd&api_key=m83nQsNKsLPYhrnbCI38OFVUPYJeXjDnPLBGxqOS',
      method: 'GET'
    });
  };

  return {
    getCuriosity: getCuriosity,
    getAPOD: getAPOD,
    storeData: storeData
  };
});