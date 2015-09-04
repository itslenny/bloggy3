BloggyApp.controller('PostShowCtrl', ['$scope','Post','$routeParams','PostComment','$rootScope', function($scope, Post, $routeParams, PostComment, $rootScope){

  $rootScope.loading = true;
  $scope.post={};
  $scope.comment={comment:''};
  $scope.currentComments=[];

  Post.get({id: $routeParams.id}).then(function(post){
    console.log(post);
    $scope.post = post;
    $scope.currentComments = post.comments
    $rootScope.loading = false;
  });

  function reloadComments(){
    console.log('reloading comments');
    PostComment.query({
      post_id:$routeParams.id
    }).then(function(comments){
      $scope.currentComments = comments;
    });
  }


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

  //This triggers on whenever a comment is added
  //to a post, but for some reason not if I posted it.
  $rootScope.$on('$sailsResourceAddedTo',function(event, data){
    console.log('resource added to message',event,data);
    //if the added thing is "comments" and it was added to THIS post
    if(data.attribute == 'comments' && data.id == $routeParams.id){
      //the data only includes a comment id
      //so we'll just reload all the comments
      reloadComments();
    }
  });

  //fires when a comment is created by me (only)
  //doesn't fire when other people create comments for some reason
  $rootScope.$on('$sailsResourceCreated',function(event, data){
    console.log('resource created message',event,data);

    //we have to make sure it's a comment
    //and that it belongs to this post
    if(data.model == 'comment' && data.id == $routeParams.id){
      //this event gives us full the full array of comments
      //so we just need to put it in the scope to update the view
      $scope.currentComments = data.data.comments;
    }
  });
}]);