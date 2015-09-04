BloggyApp.controller('PostShowCtrl', ['$scope','Post','$routeParams','PostComment','$rootScope', function($scope, Post, $routeParams, PostComment, $rootScope){

  $scope.post={};
  $scope.comment={comment:''};
  // $scope.currentComments=[];

  Post.get({id: $routeParams.id}).then(function(post){
    console.log(post);
    $scope.post = post;
    // $scope.currentComments = post.comments;
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

  //doesn't seem to fire
  // $rootScope.$on('$sailsResourceAddedTo',function(data){
  //   console.log('event data',data);
  //   $scope.currentComments = data.comments;
  //   console.log('currentComments',$scope.currentComments);
  // });

  //fires when a comment is created
  $rootScope.$on('$sailsResourceCreated',function(event, data){
    //we have to make sure it's a comment
    //and that it belongs to this post
    if(data.model == 'comment' && data.id == $routeParams.id){
      $scope.post.comments = data.data.comments;
    }
  });

}]);