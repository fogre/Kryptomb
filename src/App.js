import React, { Component } from 'react';

import Background from './Background.js';
import Body from './Body.js';
import Header from './Header';
import Navigation from './Navigation';

import './css/Body.css';

var bodyHeaderStyle = {
  margin: 'auto',
  maxWidth: '700px'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background/>
        <div style={bodyHeaderStyle}>
          <Header/>
          <Navigation/>
          <div className="BodyFrame">
           <Body/>
          </div> 
        </div>  
      </div>
    );
  }
}

export default App;
