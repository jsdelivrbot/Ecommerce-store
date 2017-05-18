import React, { Component } from 'react'
import './Home.css'

import data from './data'
import store from '../../index'

import ProductCard from '../ProductCard/ProductCard'

class Home extends Component {
  handleClick(){
    console.log(store.getState())
  }
  render(){
    const Products = data.map(obj => {
        return <ProductCard key={Math.random()} info={{price: obj.price, imgUrl: obj.imgUrl, _id: obj._id}}/>
      })
    return(
      <div id="home-wrap">
        <p onClick={this.handleClick}>Get Store</p>
        {Products}
      </div>
    )
  }
}

export default Home
