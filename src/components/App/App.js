import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Cart from '../Cart/Cart'
import ProductDetails from '../ProductDetails/ProductDetails'

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route path="/" component={Nav}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/product" component={ProductDetails}/>
          <Route exact path="/cart" component={Cart}/>
        </div>
      </Router>
    )
  }
}

export default App
