BloggyApp.controller('PostShowCtrl', ['$scope','Post','$routeParams','PostComment','$rootScope', function($scope, Post, $routeParams, PostComment, $rootScope){

  $scope.post={};
  $scope.comment={comment:''};
  $scope.currentComments=[];

  Post.get({id: $routeParams.id}).then(function(post){
    console.log(post);
    $scope.post = post;
  });

  // PostComment.query({
  //   post_id:$routeParams.id
  // }).then(function(comments){
  //   $scope.currentComments = comments
  // });

  $scope.addComment = function(){
    var newComment = new PostComment($scope.comment)
    //we could change newComment.comment ..etc here
    newComment.$save({
      post_id:$scope.post.id
    }).then(function(comment){
      console.log('saved',comment)
      $scope.comment.comment = '';
    });
  }

  $rootScope.$on('$sailsResourceAddedTo',function(data){
    console.log(data);
    $scope.$evalAsync(function(){
      $scope.post.comments = data.comments;
    });
  });

}]);