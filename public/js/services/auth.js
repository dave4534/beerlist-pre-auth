 app.factory('auth', ['$http', function($http){
  var auth = {};

  auth.register = function(user){
    return $http.post('/register', user);
  };

auth.logIn = function(user){
  return $http.post('/login', user).then(function (response) {
    auth.setCurrentUser(response.data.username);
  }, function (error) {
    return $q.reject(error);
  });
};

// Checking who the current User is
auth.currentUser = null;

auth.setCurrentUser = function (user) {
  console.log('got to the setCurrentUser')
  auth.currentUser = user;
  console.log('heres the user: ' + auth.currentUser)
  $rootScope.$broadcast("currentUserChange", user);
  console.log('setCurrUser w auth.current: ' + auth.currentUser);
};

auth.getCurrentUser = function() {
  return $http.get('/currentUser').then(function (response) {
    console.log('then func in auth: ' + response.data.username)
    auth.setCurrentUser(response.data.username);
  });
};

  return auth;
}]);