'use strict'

var mongoose = require('mongoose')

var usersSchema = new mongoose.Schema({
  name: String,
  id: Number,
  wishList: Array,
  cart: Array
})

var usersModel = mongoose.model('Users', usersSchema)

module.exports = usersModel;
