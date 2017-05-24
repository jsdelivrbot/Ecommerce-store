import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import './Cart.css'
import store from '../../index'

import CartProduct from '../CartProduct/CartProduct'
import Footer from '../Footer/Footer'

class Cart extends Component{

  componentDidMount(){
    console.log(this.props.data.length)
    if(this.props.data.length < 3){
      console.log('absolute')
      document.getElementById('footer-wrap').style.position = 'absolute'
      return
   }
    console.log('relative')
     document.getElementById('footer-wrap').style.position = 'relative'
  }

  render(){
    console.log('rerendered')
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
        <div id="cart-wrap">
          {Products}
        </div>
        <Footer/>
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
