'use strict'

var Items = require('./models/items');

var products = [
  {
    name: 'Shirt',
    price: '15.00',
    imgSrc: 'blah blah',
    description: 'its a shirt'
  },
  {
    name: 'Hat',
    price: '5.00',
    imgSrc: 'blah blah',
    description: 'its a hat'
  },
  {
    name: 'Jacket',
    price: '25.00',
    imgSrc: 'blah blah',
    description: 'its a jacket'
  },
]

products.forEach(function(product, index){
  Items.find({'name': product.name}, function(err, products){
    if(!err && !products.length){
      Items.create({
        name: product.name,
        price: product.price,
        imgSrc: product.imgSrc,
        description: product.description
      })
    }
  })
})
