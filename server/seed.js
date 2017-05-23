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
  {
    price: '21.99',
    imgUrl: 'https://ih0.redbubble.net/image.133265198.5369/ra%2Cunisex_tshirt%2Cx925%2C322e3f%3A696a94a5d4%2Cfront-c%2C217%2C190%2C210%2C230-bg%2Cf8f8f8.lite-1.jpg',
    description: 'its a shirt'
  },
  {
    price: '13.99',
    imgUrl: 'https://ih0.redbubble.net/image.146772385.7498/ra%2Cwomens_tshirt%2Cx1000%2C322e3f%3A696a94a5d4%2Cfront-c%2C237%2C212%2C210%2C230-bg%2Cf8f8f8.lite-1.jpg',
    description: 'its a shirt'
  },
  {
    price: '26.99',
    imgUrl: 'https://ih1.redbubble.net/image.298755345.1876/ra%2Cfitted_v_neck%2Cx975%2C322e3f%3A696a94a5d4%2Cfront-c%2C222%2C210%2C210%2C230-bg%2Cf8f8f8.lite-2u2.jpg',
    description: 'its a shirt'
  },
  {
    price: '11.99',
    imgUrl: 'https://ih1.redbubble.net/image.311871655.5283/ra%2Crelaxed_fit%2Cx975%2C101010%3A01c5ca27c6%2Cfront-c%2C220%2C215%2C210%2C230-bg%2Cf8f8f8.lite-1u2.jpg',
    description: 'its a shirt'
  },
  {
    price: '14.99',
    imgUrl: 'https://ih0.redbubble.net/image.23002635.0097/ra%2Cunisex_tshirt%2Cx925%2Cdd2121%3A8219e99865%2Cfront-c%2C217%2C190%2C210%2C230-bg%2Cf8f8f8.lite-1.jpg',
    description: 'its a shirt'
  },
  {
    price: '24.99',
    imgUrl: 'https://ih1.redbubble.net/image.261633050.7198/ra%2Cunisex_tshirt%2Cx925%2C101010%3A01c5ca27c6%2Cfront-c%2C217%2C190%2C210%2C230-bg%2Cf8f8f8.lite-1.jpg',
    description: 'its a shirt'
  },
  {
    price: '27.99',
    imgUrl: 'https://ih1.redbubble.net/image.293464266.5880/ctr%2Cx1050%2Cfront%2Cblack-c%2C250%2C250%2C210%2C230-bg%2Cf8f8f8.lite-4.jpg',
    description: 'its a shirt'
  },
  {
    price: '25.99',
    imgUrl: 'https://ih0.redbubble.net/image.125705734.3106/ra%2Cclassic_tee%2Cx822%2Cfafafa%3Aca443f4786%2Cfront-c%2C182%2C165%2C210%2C230-bg%2Cf8f8f8.lite-2u13.jpg',
    description: 'its a shirt'
  },
  {
    price: '22.99',
    imgUrl: 'https://ih0.redbubble.net/image.57785205.9178/ra%2Ctriblend_tee%2Cx900%2Cred_triblend%2Cfront-c%2C200%2C175%2C210%2C230-bg%2Cf8f8f8.lite-2.jpg',
    description: 'its a shirt'
  },
  {
    price: '29.99',
    imgUrl: 'https://ih1.redbubble.net/image.343639083.5248/ra%2Cunisex_tshirt%2Cx925%2C101010%3A01c5ca27c6%2Cfront-c%2C217%2C190%2C210%2C230-bg%2Cf8f8f8.lite-1u1.jpg',
    description: 'its a shirt'
  },
  {
    price: '19.99',
    imgUrl: 'https://ih0.redbubble.net/image.256074108.9104/ra%2Cunisex_tshirt%2Cx925%2Cfafafa%3Aca443f4786%2Cfront-c%2C217%2C190%2C210%2C230-bg%2Cf8f8f8.lite-1u3.jpg',
    description: 'its a shirt'
  },
  {
    price: '17.99',
    imgUrl: 'https://ih0.redbubble.net/image.43698397.2684/ra%2Craglan%2Cx925%2Cwhite_black%2Cfront-c%2C210%2C180%2C210%2C230-bg%2Cf8f8f8.lite-1.jpg',
    description: 'its a shirt'
  },
  {
    price: '22.99',
    imgUrl: 'https://ih1.redbubble.net/image.65919410.4892/ra%2Cunisex_tshirt%2Cx925%2Cfafafa%3Aca443f4786%2Cfront-c%2C217%2C190%2C210%2C230-bg%2Cf8f8f8.lite-1u2.jpg',
    description: 'its a shirt'
  },
  {
    price: '26.99',
    imgUrl: 'https://ih0.redbubble.net/image.134102157.7093/ra%2Cclassic_tee%2Cx822%2C322e3f%3A696a94a5d4%2Cfront-c%2C182%2C165%2C210%2C230-bg%2Cf8f8f8.lite-2.jpg',
    description: 'its a shirt'
  },
  {
    price: '29.99',
    imgUrl: 'https://ih1.redbubble.net/image.133250692.4626/ra%2Crelaxed_fit%2Cx975%2C322e3f%3A696a94a5d4%2Cfront-c%2C220%2C215%2C210%2C230-bg%2Cf8f8f8.lite-1.jpg',
    description: 'its a shirt'
  },
  {
    price: '13.99',
    imgUrl: 'https://ih1.redbubble.net/image.175570234.8521/ra%2Cfitted_scoop%2Cx975%2C101010%3A01c5ca27c6%2Cfront-c%2C222%2C210%2C210%2C230-bg%2Cf8f8f8.lite-4u13.jpg',
    description: 'its a shirt'
  },
  {
    price: '27.99',
    imgUrl: 'https://ih1.redbubble.net/image.360345907.6022/rco%2Clong_t_shirt%2Cmens%2Cx700%2Cblack%2Cfront-c%2C158%2C120%2C210%2C230-bg%2Cf8f8f8.lite-2u1.jpg',
    description: 'its a shirt'
  },
  {
    price: '17.99',
    imgUrl: 'https://ih1.redbubble.net/image.157442056.3943/ra%2Clongsleeve%2Cx925%2C322e3f%3A696a94a5d4%2Cfront-c%2C210%2C180%2C210%2C230-bg%2Cf8f8f8.lite-1u2.jpg',
    description: 'its a shirt'
  },
  {
    price: '22.99',
    imgUrl: 'https://ih1.redbubble.net/image.177481765.3301/ra%2Clongsleeve%2Cx925%2C322e3f%3A696a94a5d4%2Cfront-c%2C210%2C180%2C210%2C230-bg%2Cf8f8f8.lite-1u1.jpg',
    description: 'its a shirt'
  },
  {
    price: '11.99',
    imgUrl: 'https://ih0.redbubble.net/image.14406371.1531/ra%2Crelaxed_fit%2Cx975%2C322e3f%3A696a94a5d4%2Cfront-c%2C220%2C215%2C210%2C230-bg%2Cf8f8f8.lite-1u2.jpg',
    description: 'its a shirt'
  },
  {
    price: '24.99',
    imgUrl: 'https://ih0.redbubble.net/image.266527066.3866/ra%2Cclassic_tee%2Cx822%2C101010%3A01c5ca27c6%2Cfront-c%2C182%2C165%2C210%2C230-bg%2Cf8f8f8.lite-2u2.jpg',
    description: 'its a shirt'
  },
  {
    price: '21.99',
    imgUrl: 'https://ih0.redbubble.net/image.201547313.6102/ra%2Cunisex_tshirt%2Cx925%2C101010%3A01c5ca27c6%2Cfront-c%2C217%2C190%2C210%2C230-bg%2Cf8f8f8.lite-1u13.jpg',
    description: 'its a shirt'
  },
  {
    price: '19.99',
    imgUrl: 'https://ih0.redbubble.net/image.306650904.9291/ra%2Ctriblend_tee%2Cx900%2Cnavy_triblend%2Cfront-c%2C200%2C175%2C210%2C230-bg%2Cf8f8f8.lite-2u2.jpg',
    description: 'its a shirt'
  },
  {
    price: '22.99',
    imgUrl: 'https://ih0.redbubble.net/image.340287014.1631/ra%2Cfitted_scoop%2Cx975%2C101010%3A01c5ca27c6%2Cfront-c%2C222%2C210%2C210%2C230-bg%2Cf8f8f8.lite-4u3.jpg',
    description: 'its a shirt'
  },
  {
    price: '17.99',
    imgUrl: 'https://ih0.redbubble.net/image.112183327.6366/ra%2Cunisex_tshirt%2Cx925%2C101010%3A01c5ca27c6%2Cfront-c%2C217%2C190%2C210%2C230-bg%2Cf8f8f8.lite-1.jpg',
    description: 'its a shirt'
  },
  {
    price: '21.99',
    imgUrl: 'https://ih0.redbubble.net/image.213485344.1185/gptr%2Cx900%2Cfront%2Cblack-c%2C200%2C205%2C210%2C230-bg%2Cf8f8f8.lite-1.jpg',
    description: 'its a shirt'
  },
  {
    price: '18.99',
    imgUrl: 'https://ih1.redbubble.net/image.334400668.4915/ra%2Cfitted_scoop%2Cx975%2C101010%3A01c5ca27c6%2Cfront-c%2C222%2C210%2C210%2C230-bg%2Cf8f8f8.lite-4u3.jpg',
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
