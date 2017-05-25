import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout';


import './Cart.css'
import store from '../../index'

import CartProduct from '../CartProduct/CartProduct'
import Footer from '../Footer/Footer'

class Cart extends Component{

  constructor(){
    super();
    this.state = {
      amount: 0
    }
  }

  onToken(token){
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(token => {
      alert(`We are in business, ${token.email}`);
    });
  }

  componentDidMount(){
    if(this.props.data.length < 3){
      document.getElementById('footer-wrap').style.position = 'absolute'
   }
    else{
     document.getElementById('footer-wrap').style.position = 'relative'
   }
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('nextProps: ' + nextProps.data + '_____' + 'this.props.data: ' + this.props.data)
    if(nextProps.data !== this.props.data){
      return true
    }
    console.log('nextState: ' + nextState.amount + '_____' + 'this.state.amount: ' + this.state.amount)
    if(nextState.amount === this.state.amount){
      return false
    }
    return true
  }

  render(){
    var ids = store.getState().guestCart;
    var storeProducts = store.getState().products;
    var amount = 0;
    var Products = storeProducts.map(product => {
      for(var i = 0; i < ids.length; i++){
        if(product._id === ids[i]){
          this.setState({
            amount: this.state.amount += Number(product.price.split('').filter(val => {
              if(val !== '.'){
                return true
              }
              return false
            }).join('')
          )})
          return <CartProduct info={{imgUrl: product.imgUrl, price: product.price, description: product.description, id: product._id}}/>
        }
      }
    })
    return(
      <div>
        <div id="cart-wrap">
          {Products}
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
            amount={this.state.amount}
            name="Stripe.com"
            description="Widget"
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            locale="auto"
            zipCode={false}
         >
            <button id="checkout-button">Checkout</button>
         </StripeCheckout>
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
