BloggyApp.controller('TestCtrl', ['$scope','Comment', 'Tag', '$http', 'PostComment', function($scope, Comment, Tag, $http, PostComment){

  console.log('test ctrl');

  // Comment.query().then(function(comments){
  //   $scope.testData=comments;
  // })

  // Tag.query().then(function(tags){
  //   $scope.testData=tags;
  // })

  // var postId = '55e78e036adc06f83dc4af51';
  // var commentId = '55e8b14c229fd9ab2acbdc2b';
  // $http({
  //   method:'post',
  //   url:'/api/post/' + postId + '/comments/' + commentId
  // }).success(function(data){
  //   $scope.testData = data
  // })

  // PostComment.query({
  //   post_id:'55e78e036adc06f83dc4af51'
  // }).then(function(comments){
  //   $scope.testData = comments;
  // });

  PostComment.get({
    id:'55e8b14c229fd9ab2acbdc2b',
    post_id:'55e78e036adc06f83dc4af51'
  }).then(function(comment){
    $scope.testData = comment;
  });


  $scope.createComment = function(){
    var comment = new Comment();
    comment.comment = "this is my new comment";
    // comment.post = '55e78e036adc06f83dc4af51';
    comment.$save().then(function(newComment){
      $scope.testData = newComment;
    });
  }

}]);








