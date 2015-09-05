BloggyApp.controller('NavCtrl', ['$scope','$modal','UserService', function($scope, $modal, UserService){

  $scope.UserService = UserService;
  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  });

  $scope.showLogin = function(){
    $modal.open({
      templateUrl:'/views/auth/loginModal.html',
      controller:'AuthLoginModalCtrl'
    })
  }

  $scope.logout = function(){
    UserService.logout(function(err,data){
      //do nothing...
    });
  }

}]);