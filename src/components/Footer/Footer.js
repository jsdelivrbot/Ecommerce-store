import React, { Component } from 'react';

import './Footer.css'

class Footer extends Component {
  render(){
    return(
      <div id="footer-wrap">
        <p>Portfolio site only, no transaction will be proccessed</p>
        <p>Images pulled from <a href="https://www.redbubble.com/shop/developer+t-shirts?cat_context=u-tees&page=2&accordion=style" target="_blank">Redbubble.com</a></p>
      </div>
    )
  }
}
export default Footer
