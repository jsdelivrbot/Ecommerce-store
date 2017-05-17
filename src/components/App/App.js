import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import ProductCard from '../ProductCard/ProductCard'

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route path="/" component={Nav}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/productCard" component={ProductCard}/>
        </div>
      </Router>
    )
  }
}

export default App
