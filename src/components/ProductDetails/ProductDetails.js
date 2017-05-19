import React, { Component } from 'react';
import axios from 'axios'

import './ProductDetails.css'
import store from '../../index'

class ProductDetails extends Component{
  constructor(){
    super();
    this.state = {
      data: {
        imgUrl: '',
        price: '',
        description: ''
      }
    }
  }

  componentWillMount(){
    if(!store.getState().productId){
      window.location.href = '/'
    }
    var id = store.getState().productId
    axios.get('/api/product/id/' + id).then((response)=>{
      this.setState({
        data: response.data[0]
      })
      document.getElementById('details-wrap').style.display = 'flex'
      console.log(this.state.data)
    })
  }

  addToCart = () => {
    if(!store.getState().loggedIn){
      var cartData = store.getState().guestCart;
      for(var i = 0; i < cartData.length; i++){
        if(cartData[i] === this.state.data._id){
          document.getElementById('cart-button').style.width = '180px'
          document.getElementById('cart-button').innerHTML = 'Already in cart'
          document.getElementById('cart-button').style.cursor = 'not-allowed'
          return
        }
      }
      store.dispatch({type: 'ADD_TO_GUEST_CART', payload: this.state.data._id})
      document.getElementById('cart-button').style.width = '140px'
      document.getElementById('cart-button').innerHTML = 'Added to cart'
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
