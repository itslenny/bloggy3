module.exports = function(req, res, next) {
  var model = req.options.model;
  var id = req.param('id');
  var user = req.session.user;

  if(user && model && id && sails.models[model]){
    sails.models[model].findOneById(id).then(function(item){
      // console.log('item', item, user);
      if(item && item.owner && item.owner == user.id){
        return next();
      }else{

        return res.send(403,{
          //must include status code in message body
          //for socket to recognize it
          status:403,
          error:'This resource does not belong to you.'
        });
      }
    });
  }else{
    return res.send({
      //must include status code in message body
      //for socket to recognize it
      status:403,
      error:'Invalid resource'
    });
  }
}