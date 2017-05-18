import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './ProductCard.css'

import store from '../../index'

class ProductCard extends Component {
  updateId(id){
    store.dispatch({type: 'UPDATE_PRODUCT_ID', payload: id})
  }
  render(){
    return(
      <Link className="product-link" to="product">
        <div className="card-wrap" onClick={()=>{this.updateId(this.props.info._id)}}>
          <img src={this.props.info.imgUrl} alt=""/>
          <p>${this.props.info.price}</p>
          <p className="fake-link">view shirt</p>
        </div>
      </Link>
    )
  }
}
export default ProductCard
