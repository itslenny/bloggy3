BloggyApp.factory('PostComment', ['sailsResource', function(sailsResource){
  return sailsResource('Comment',{

    query:{
      method:'GET',
      url:'/api/post/:post_id/comments',
      isArray: true
    },
    get:{
      method:'GET',
      url:'/api/post/:post_id/comments/:id'
    },
    save:{
      method:'POST',
      url:'/api/post/:post_id/comments'
    }

  });
}]);

