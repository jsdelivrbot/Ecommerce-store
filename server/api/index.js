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

router.get('/product/id/:id', (req, res) => {
  Items.find({'_id': req.params.id}, (err, product) => {
    if(err){
      return res.status(500).json({err: err.message})
    }
    res.status(200).send(product)
  })
})

module.exports = router;
