BloggyApp.controller('HomeCtrl', ['$scope','$rootScope','Post','$modal', function($scope, $rootScope, Post, $modal){

  // $rootScope.$on('$sailsResourceUpdated',function(event,message){
  //   console.log('event!!',event,message);
  // });

  $scope.posts = [];
  $scope.orderField = 'title';

  Post.query().then(function(posts){
    $scope.posts = posts
  });

  $scope.deletePost = function(post){
    post.$delete();
  }

  $scope.editPost = function(post){
    // console.log('EDIT',post);
    $modal.open({
      templateUrl:'/views/post/editModal.html',
      controller:'PostEditModalCtrl',
      resolve:{
        editPost: function(){
          return post;
        }
      }
    });
  }

}]);






// "the old fashioned way"
// $http({
//   url:'/api/post'
// }).success(function(data){
//   console.log('data',data);
// })