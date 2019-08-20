import React, { Component } from 'react';

import Body from './Body.js';
import Footer from './Footer.js';
import Navigation from './Navigation';

import Logo from './images/logoWeb.png';

class HeaderNavBody extends Component {

  constructor() {
  	super();
  	this.state = { headerLoaded: false };
  }

  loadHeader() {
  	this.setState({ headerLoaded: true});
  }

  render() {
  	
  	if (!this.state.headerLoaded) {
  		return(
  			<div>
				<img src={Logo} onLoad={this.loadHeader.bind(this)} alt='logo' className="HeaderImage"/>
			</div>
		);
	}

  	return(
	  	<div>
	      <img src={Logo} alt='logo' className="HeaderImage"/>
	      <Navigation/>
	      <div className="BodyFrame">
	      	<Body/>
	      	<Footer/>
	      	<section className="BodyNoise"/>
	      </div>
	    </div>  
	);      
  }
}

export default HeaderNavBody;