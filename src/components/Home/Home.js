import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'

import data from './data'

import ProductCard from '../ProductCard/ProductCard'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount(){
    axios.get('/api/products').then((response) => {
      console.log(response.data)
      this.setState({
        data: response.data.products
      })
    })
  }

  render(){
    var Products = null;
    if(this.state.data){
      Products = this.state.data.map((obj) => {
          return <ProductCard key={Math.random()} info={{price: obj.price, imgUrl: obj.imgUrl, _id: obj._id}}/>
      })
    }
      return(
          <div id="home-wrap">
            {Products}
          </div>
        )
      }
    }

export default Home
