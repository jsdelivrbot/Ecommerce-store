import React, { Component } from 'react';

import './ProductCard.css'

class ProductCard extends Component {
  render(){
    return(
      <div className="card-wrap">
        <img src={this.props.info.imgUrl} alt=""/>
        <p>{this.props.info.price}</p>
        <a href="#">view shirt</a>
      </div>
    )
  }
}
export default ProductCard
