/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    title:{
      type:'string',
      required: true
    },
    body:{
      type:'text',
      required:true
    },
    song:{
      type:'json'
    },

    ////// relationships
    comments:{
      collection:'Comment',
      via:'post'
    },
    tags:{
      collection:'Tag',
      via:'posts'
    },
    owner:{
      model:'User',
      defaultsTo:null
    }
    ///////
  }
};






