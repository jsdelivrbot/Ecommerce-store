import React, { Component } from 'react'

import './CartProduct.css'
import store from '../../index'

class CartProduct extends Component{
  removeId(id){
    store.dispatch({type: 'REMOVE_FROM_GUEST_CART', payload: id})
  }
  render(){
    return(
      <div className="cart-product-wrap">
        <img src={this.props.info.imgUrl} alt=""/>
        <div className="cart-info-wrap">
          <h3>${this.props.info.price}</h3>
          <p>{this.props.info.description}</p>
          <div className="remove-cart" onClick={()=>{this.removeId(this.props.info.id)}}>remove</div>
        </div>
      </div>
    )
  }
}
export default CartProduct
