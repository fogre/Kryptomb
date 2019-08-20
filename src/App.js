import React, { Component } from 'react';

import HeaderNavBody from './HeaderNavBody';

import './css/Body.css';

class App extends Component {
  render() {
    return (
      <div>
        <section className="Background"></section>
        <div className="HeaderNavBodyFrame">
          <HeaderNavBody />
        </div>  
      </div>
    );
  }
}

export default App;
