import React, { Component } from 'react'

class Home extends Component {
  render(){
    return(
      <a href="/auth/facebook">
        <div className="login-button">
          Facebook
        </div>
      </a>
    )
  }
}

export default Home
