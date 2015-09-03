BloggyApp.controller('PostNewCtrl', ['$scope','Post','$location', function($scope, Post, $location){

  $scope.newPost = {
    title:'',
    body:''
  };

  console.log('post new ctrl 123');

  $scope.createPost = function(){
    //vaidate stuff her is an option
    var newPost = new Post($scope.newPost);
    // newPost.title=$scope.newPost.title;
    newPost.$save().then(function(postResult){
      console.log('post',postResult);
      $location.path('/');
    }).catch(function(err){
      alert("it didn't work")
      console.log('err',err);
    });
  }

}]);
