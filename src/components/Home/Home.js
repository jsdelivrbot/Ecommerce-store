import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './Home.css'

import store from '../../index'

import ProductCard from '../ProductCard/ProductCard'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      data: null
    }
  }

  componentWillMount(){
    if(!this.props.data.length){
      axios.get('/api/products').then((response) => {
        store.dispatch({type: 'ADD_PRODUCTS', payload: response.data.products})
      })
    }
  }

  render(){
    var Products = this.props.data.map(obj => {
      return <ProductCard info={{imgUrl: obj.imgUrl, price: obj.price, _id: obj._id}}/>
    })
      return(
          <div id="home-wrap">
            {Products}
          </div>
        )
      }
    }

    function mapStateToProps(state){
      return {
        data: state.products
      }
    }

export default connect(mapStateToProps)(Home)
