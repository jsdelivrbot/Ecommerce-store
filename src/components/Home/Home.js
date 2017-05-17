import React, { Component } from 'react'

import './Home.css'

import data from './data'
import store from '../../index'

import ProductCard from '../ProductCard/ProductCard'

class Home extends Component {
  render(){
    const Products = data.map(obj => {
        return <ProductCard key={Math.random()} info={{price: obj.price, imgUrl: obj.imgUrl, _id: obj._id}}/>
      })
    return(
      <div id="home-wrap">
        {Products}
      </div>
    )
  }
}

export default Home
