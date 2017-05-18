import React, { Component } from 'react';

import './ProductDetails.css'
import data from '../Home/data'
import store from '../../index'

class ProductDetails extends Component{
  constructor(){
    super();
    this.state = {
      data: null
    }
  }

  componentWillMount(){
    if(!store.getState().productId){
      window.location.href = '/'
    }
    data.map(product => {
      if(product._id === store.getState().productId){
        this.setState({
          data: product
        })
      }
      return 'State updated'
    })
  }

  addToCart = () => {
    if(!store.getState().loggedIn){
      var cartData = store.getState().guestCart;
      for(var i = 0; i < cartData.length; i++){
        if(cartData[i] === this.state.data._id){
          return
        }
      }
      store.dispatch({type: 'ADD_TO_GUEST_CART', payload: this.state.data._id})
    }
  }

  render(){
    return(
      <div id="details-wrap">
        <img src={this.state.data.imgUrl} alt=""/>
        <p id="details-price">${this.state.data.price}</p>
        <p id="details-desc">{this.state.data.description}</p>
        <div id="cart-button" onClick={this.addToCart}>Add to cart</div>
      </div>
    )
  }
}
export default ProductDetails
