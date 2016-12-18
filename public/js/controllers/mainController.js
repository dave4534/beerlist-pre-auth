app.controller('MainCtrl', ['$scope','beers', 'auth', function($scope, beers, auth){
  beers.getAll().then(function () {
    $scope.beers = beers.beers;
  });

  $scope.addBeer = function() {
    if ($scope.name === '') { return; }

    beers.create({ 
      name: $scope.name,
      style: $scope.style,
      image_url: $scope.image_url,
      abv: $scope.abv
    });

    $scope.name = '';
    $scope.style = '';
    $scope.abv = '';
    $scope.image_url = '';
  };

  $scope.removeBeer = function (beer) {
    beers.delete(beer);
  };






 

  



}]);