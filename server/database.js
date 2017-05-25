'use strict';

var mongoose = require('mongoose');

var config = require('./config.js')

mongoose.connect('mongodb://nayray21:' + config.mongoPassword + '@cluster0-shard-00-00-2wvyg.mongodb.net:27017,cluster0-shard-00-01-2wvyg.mongodb.net:27017,cluster0-shard-00-02-2wvyg.mongodb.net:27017/shop?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', (err) => {
  if(err){
    console.log("Failed to connect to database")
  }
  else{
    console.log("Successfully connected to database")
  }
})
