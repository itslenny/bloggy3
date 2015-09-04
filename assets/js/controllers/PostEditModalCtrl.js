BloggyApp.controller('PostEditModalCtrl', ['$scope','$modalInstance','editPost','AlertService', function($scope, $modalInstance, editPost, AlertService){

  $scope.newPost={
    title:editPost.title,
    body:editPost.body
  };

  $scope.updatePost = function(){
    editPost.title = $scope.newPost.title;
    editPost.body = $scope.newPost.body;
    editPost.$save().then(function(){
      $modalInstance.close();
      AlertService.add('info','The post was updated.')
    });
  }

  $scope.cancel = function(){
    $modalInstance.dismiss();
    AlertService.add('warning','Post not updated.')
  }

  console.log('post edit modal',editPost);

}]);