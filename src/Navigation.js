import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {

  render() {
    return(	
      <div className="NavigationFrame">
        <Link to='/' className="NavigationLink">News</Link>
        <Link to='/live' className="NavigationLink">Live</Link>
        <Link to='/discography' className="NavigationLink">Discography</Link>
        <a href='https://krypts.bigcartel.com' target='_blank' rel="noopener noreferrer"
          className="NavigationLink">Merch</a>
      </div>  
    );	
  }

}

export default Navigation;