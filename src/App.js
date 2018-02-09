import React, { Component } from 'react';

import Background from './Background.js';
import Body from './Body.js';
import Header from './Header';
import Navigation from './Navigation';

import './css/Body.css';
import BackgroundNoise from './images/noise.png'

var bodyHeaderStyle = {
  margin: 'auto',
  maxWidth: '700px'
}

var noise =  {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundImage: `url(${BackgroundNoise})`,
  textAlign: 'center'
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
           <div  style= {noice}/>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
