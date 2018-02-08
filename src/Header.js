import React, { Component } from 'react';
import Logo from './images/logo.png';

class Header extends Component {

  render() {
    return(	
        <img src={Logo} alt='logo' className="HeaderImage"/>
    );	
  }

}

export default Header;