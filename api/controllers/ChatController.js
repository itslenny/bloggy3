/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var chatlog = [
  {from:'System',msg:'First message'}
];

module.exports = {

  join: function(req,res){

    //notify users of join / leave room
    sails.sockets.broadcast('mychatroom','userjoin',{user:req.session.user.email});
    req.socket.on('disconnect', function(){
      sails.sockets.broadcast('mychatroom','userleave',{user:req.session.user.email});
    });

    sails.sockets.join(req.socket, 'mychatroom');
    res.send(chatlog);
    // console.log(chatlog);
  },
  post: function(req,res){
    var msg = {
      msg: req.body.msg,
      from: req.session.user.email
    };
    chatlog.push(msg);
    sails.sockets.broadcast('mychatroom', 'addchat', msg);
    res.send({result:true});
  }

};

