import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Discography from './components/Discography.js';
import Live from './components/Live.js';
import News from './components/News.js';

var bodyStyle = {
	color: 'white',
	backgroundColor: 'black',
	height: '1000px',
	position: 'relative',
	maxHeight: '1000px',
	width: '100%',
	zIndex: '4'
}

//asdasdasd
class Body extends Component {

  render() {
    return(	
      <main style={bodyStyle}>
      	<Switch>
	      <Route exact path='/' component={News}/>
	      <Route exact path='/live' component={Live}/>
	      <Route exact path='/discography' component={Discography}/>
	    </Switch>
      </main>
    );	
  }

}

export default Body;