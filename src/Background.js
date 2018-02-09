import React, { Component } from 'react';
import BackgroundImage from './images/CoverWebSquare.jpg'

var backgroundStyle = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  zIndex: '0'
};


class Background extends Component {

  render() {
    return(	
      <section style={backgroundStyle}></section>
    );	
  }

}

export default Background;