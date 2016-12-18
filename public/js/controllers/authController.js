app.controller('AuthCtrl', ['$scope', '$state', 'auth', function($scope, $state, auth){
  $scope.register = function () {
    auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };

$scope.logIn = function(){
  auth.logIn($scope.user).then(function (){
    $state.go('home');
  }, function(error){
    $scope.error = error.data;
  });
};

// Invokes the function that checks who the current User is, defined in the auth.js factory
auth.getCurrentUser();

// auth.setCurrentUser = function (user) {
//   auth.currentUser = user;
//   console.log(auth.currentUser)
// };

}]);