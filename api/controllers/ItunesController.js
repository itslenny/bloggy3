/**
 * ItunesController
 *
 * @description :: Server-side logic for managing itunes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var request = require('request');

module.exports = {

  //GET - /api/itunes/search?q=search+term
  search: function(req, res) {
    var searchTerm = req.query.q;

    request({
      url:'https://itunes.apple.com/search',
      qs:{
        term:searchTerm,
        entity:'musicTrack'
      }
    },function(error,response, body){
      if(!error && response.statusCode === 200){
        //optionally do some pre-proccessing here
        res.send(body);
      }else{
        res.send({
          error:error,
          code:response.statusCode
        });
      }
    });
  }

};

