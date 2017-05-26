'use strict';

var mongoose = require('mongoose');

var config = require('./config.js')

mongoose.connect('mongodb://heroku_h3smw2qx:bim9mh5vtev01p50ggg0ak7unk@ds153521.mlab.com:53521/heroku_h3smw2qx', (err) => {
  if(err){
    console.log("Failed to connect to database")
  }
  else{
    console.log("Successfully connected to database")
  }
})
