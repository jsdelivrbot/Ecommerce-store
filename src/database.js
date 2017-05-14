'use strict';

var mongoose = require('mongoose');

mongoose.connect('http://localhost/Ecommerce-store', (err) => {
  if(err){
    console.log("Failed to connect to database")
  },
  else{
    console.log("Successfully connected to database")
  }
})
