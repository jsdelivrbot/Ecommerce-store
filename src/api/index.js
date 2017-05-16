'use strict'
var express = require('express');
var router = express.Router();
var Items = require('../models/items')
var Users = require('../models/users')

router.get('/products', (req, res) => {
  Items.find({}, (err, products) => {
    if(err){
      return res.status(500).json({err: err.message})
    }
    res.status(200).json({products: products})
  })
})

module.exports = router;
