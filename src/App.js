import React, { Component } from 'react';
import Background from './Background.js';
import Body from './Body.js';
import Header from './Header';
import Navigation from './Navigation';

var bodyHeaderStyle = {
  margin: 'auto',
  maxHeight: '1000px',
  maxWidth: '1000px',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background/>
        <div className="BodyHeader" style={bodyHeaderStyle}>
          <Header/>
          <Navigation/>
          <Body/>
        </div>  
      </div>
    );
  }
}

export default App;
