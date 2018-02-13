import React, { Component } from 'react';

import Background from './Background.js';
import Body from './Body.js';
import Footer from './Footer.js';
import Header from './Header';
import Navigation from './Navigation';

import './css/Body.css';

class App extends Component {
  render() {
    return (
      <div>
        <Background/>
        <div className="HeaderNavBodyFrame">
          <Header/>
          <Navigation/>
          <div className="BodyFrame">
           <Body/>
           <Footer/>
           <section className="BodyNoise"/>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
