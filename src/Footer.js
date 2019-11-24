import React, { Component } from 'react';

class Footer extends Component {

  render() {
  	return (
  	  <div className="Footer">
  	  	<br/>
  	    <p>Logo and background art by T.Ketola. Site by fogre.
  	    <br/>All rights reserved.</p>
  	    <div className="FooterLinks">
  	    	<a href='https://facebook.com/kryptsdeath' target='_blank' rel="noopener noreferrer"
          		className="NavigationLink">Facebook</a>
          	<a href='https://instagram.com/kryptsdeath' target='_blank' rel="noopener noreferrer"
          className="NavigationLink">Instagram</a>
        </div>  
  	  </div>
  	);
  }

}

export default Footer;