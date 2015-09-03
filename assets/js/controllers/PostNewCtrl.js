BloggyApp.controller('PostNewCtrl', ['$scope','Post','$location','$http', function($scope, Post, $location, $http){

  $scope.newPost = {
    title:'',
    body:'',
    song:null
  };

  console.log('post new ctrl 345345');

  $scope.getSongs = function(searchTerm){
    console.log('searching...');
    return $http({
      url:'/api/itunes/search',
      params:{
        q:searchTerm
      }
    }).then(function(data){
      return data.data.results;
    });
  }

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
