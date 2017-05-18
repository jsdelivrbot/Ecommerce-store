import React, { Component } from 'react';

import './ProductDetails.css'

import store from '../../index'

class ProductDetails extends Component{
  render(){
    console.log(store.getState())
    return(
      <div>
      </div>
    )
  }
}
export default ProductDetails
