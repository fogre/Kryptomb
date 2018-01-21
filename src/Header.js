import React, { Component } from 'react';
import Logo from './images/logo.png';


var headerStyle = {
  position: 'relative',
  textAlign: 'center',
  width: '100%',
  zIndex: '2',
}

class Header extends Component {

  render() {
    return(	
        <img src={Logo} alt='logo' style={headerStyle}/>
    );	
  }

}

export default Header;