import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Cart.css'
import Data from '../Home/data'
import store from '../../index'

import CartProduct from '../CartProduct/CartProduct'

class Cart extends Component{

  render(){
    var Products = Data.map(obj => {
      var ids = store.getState().guestCart;
      for(var i = 0; i < ids.length; i++){
        if(obj._id === ids[i]){
          return <CartProduct key={Math.random()} info={{price: obj.price, imgUrl: obj.imgUrl, description: obj.description, id: obj._id}}/>
        }
      }
      return null
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
