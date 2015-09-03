BloggyApp.controller('PostEditModalCtrl', ['$scope','$modalInstance','editPost', function($scope, $modalInstance, editPost){

  $scope.newPost={
    title:editPost.title,
    body:editPost.body
  };

  $scope.updatePost = function(){
    editPost.title = $scope.newPost.title;
    editPost.body = $scope.newPost.body;
    editPost.$save().then(function(){
      $modalInstance.close();
    });
  }

  $scope.cancel = function(){
    $modalInstance.dismiss();
  }

  console.log('post edit modal',editPost);

}]);