import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component{
  constructor(){
    super();
    this.state = {
      opened: false
    }
  }

  slide = () => {
    if(this.state.opened){
      document.getElementById('hamburger-menu').style.animationName = "slide-up"
      this.setState({
        opened: false
      })
    }
    else{
      document.getElementById('hamburger-menu').style.animationName = "slide-down"
      this.setState({
        opened: true
      })
    }
  }
  render(){
    return(
      <div>
        <div id="nav-wrap">
          <Link id="home-link" to="/"><h1>devGear</h1></Link>
          <div id="hamburger-button" onClick={this.slide}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="nav-filler"></div>
        <div id="hamburger-menu">
          <ul>
            <li onClick={this.slide}><a href="/auth/facebook"><img src="https://www.codenameone.com/img/blog/facebook-login-blue.png" alt=""/></a></li>
            <li onClick={this.slide}><Link className="nav-link" to="/">My Wishlist</Link></li>
            <li onClick={this.slide}><Link className="nav-link" to="/cart">My Cart</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
