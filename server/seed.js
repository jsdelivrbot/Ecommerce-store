'use strict'

var Items = require('./models/items');

var products = [
  {
    price: '15.99',
    imgUrl: 'https://ih1.redbubble.net/image.90148597.2264/ra%2Cclassic_tee%2Cx822%2C101010%3A01c5ca27c6%2Cfront-c%2C182%2C165%2C210%2C230-bg%2Cf8f8f8.lite-2u2.jpg',
    description: 'its a shirt'
  },
  {
    price: '5.99',
    imgUrl: 'https://ih0.redbubble.net/image.247063759.4929/ra%2Craglan%2Cx925%2Cblack_white%2Cfront-c%2C210%2C180%2C210%2C230-bg%2Cf8f8f8.lite-1.jpg',
    description: 'its a shirt'
  },
  {
    price: '25.99',
    imgUrl: 'https://ih0.redbubble.net/image.340287014.1631/ra%2Cunisex_tshirt%2Cx925%2C101010%3A01c5ca27c6%2Cfront-c%2C217%2C190%2C210%2C230-bg%2Cf8f8f8.lite-1u3.jpg',
    description: 'its a shirt'
  },
]

products.forEach(function(product, index){
  Items.find({'price': product.price}, function(err, products){
    if(!err && !products.length){
      Items.create({
        price: product.price,
        imgUrl: product.imgUrl,
        description: product.description
      })
    }
  })
})
