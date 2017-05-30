import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
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
      document.getElementById('first-span').style.animationName = "rotate-down-reset"
      document.getElementById('third-span').style.animationName = "rotate-up-reset"
      document.getElementById('second-span').style.display = "block"
      this.setState({
        opened: false
      })
    }
    else{
      document.getElementById('hamburger-menu').style.animationName = "slide-down"
      document.getElementById('first-span').style.animationName = "rotate-down"
      document.getElementById('second-span').style.display = "none"
      document.getElementById('third-span').style.animationName = "rotate-up"
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
            <span id="first-span"></span>
            <span id="second-span"></span>
            <span id="third-span"></span>
          </div>
        </div>
        <div id="nav-filler"></div>
        <div id="hamburger-menu">
          <ul>
            <li onClick={this.slide}><Link className="nav-link" to="/cart">Cart</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
