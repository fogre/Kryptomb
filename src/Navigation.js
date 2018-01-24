import React, { Component } from 'react';
import { Link } from 'react-router-dom'


var NavigationStyle = {
	color: 'white',
	backgroundColor: 'black',
	height: 'auto',
	position: 'relative',
	maxHeight: '1000px',
	width: '100%',
	zIndex: '3'
}


class Navigation extends Component {

  render() {
    return(	
    <div style={NavigationStyle}>	
      <Link to='/'>News</Link>
      <Link to='/live'>Live</Link>
      <Link to='/discography'>Discography</Link>
      <a href='https://krypts.bigcartel.com' target='_blank' rel="noopener noreferrer">Merch</a>
    </div>  
    );	
  }

}

export default Navigation;