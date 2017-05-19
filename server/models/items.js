'use strict';

var mongoose = require('mongoose');

var itemsSchema = new mongoose.Schema({
  name: String,
  price: String,
  imgUrl: String,
  description: String
})

var itemsModel = mongoose.model('Items', itemsSchema);

module.exports = itemsModel;
