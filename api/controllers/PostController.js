/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function(req,res){
    Post.create({
      title:req.body.title,
      body:req.body.body,
      song:req.body.song,
      owner:req.session.user.id
    }).then(function(post){
      Post.publishCreate(post);
      res.send(post);
    }).catch(function(error){
      res.send(400, error);
    });
  }


};






