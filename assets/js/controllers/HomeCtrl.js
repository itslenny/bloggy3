BloggyApp.controller('HomeCtrl', ['$scope','$rootScope','Post','$modal', 'AlertService', function($scope, $rootScope, Post, $modal, AlertService){

  AlertService.clear();

  // $rootScope.$on('$sailsResourceUpdated',function(event,message){
  //   console.log('event!!',event,message);
  // });
  $rootScope.loading = true;
  $scope.posts = [];
  $scope.orderField = 'title';

  Post.query().then(function(posts){
    $scope.posts = posts;
    $rootScope.loading = false;
  });

  $scope.deletePost = function(post){
    post.$delete();
    AlertService.add('info','The post was deleted.')
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