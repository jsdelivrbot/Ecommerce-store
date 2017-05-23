import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import './Cart.css'
import store from '../../index'

import CartProduct from '../CartProduct/CartProduct'

class Cart extends Component{

  render(){
    var ids = store.getState().guestCart;
    var storeProducts = store.getState().products;
    var Products = storeProducts.map(product => {
      for(var i = 0; i < ids.length; i++){
        if(product._id === ids[i]){
          return <CartProduct info={{imgUrl: product.imgUrl, price: product.price, description: product.description, id: product._id}}/>
        }
      }
    })
    return(
      <div>
        {Products}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    data: state.guestCart
  }
}

export default connect(mapStateToProps)(Cart)
