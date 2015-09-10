BloggyApp.controller('AuthLoginModalCtrl', ['$scope','UserService','$modalInstance', '$http', function($scope, UserService, $modalInstance, $http){

  $scope.user={email:'',password:''};

  $scope.signup = function(){
    $http.post('/api/user',$scope.user).success(function(data){
      console.log('data',data);
      $modalInstance.close();
      alert('user (probably) created.');
    }).error(function(err){
      alert('Nope... could not create a user.');
      console.log('err',err);
    });
  }

  $scope.login = function(){
    UserService.login($scope.user.email, $scope.user.password, function(err, data){
      if(err){
        console.log(err);
        alert('Something terrible happened.');
      } else if(data && data.result) {
        $modalInstance.close();
      } else {
        console.log(data);
        alert('Unable to login.');
      }
    });
  }

}]);