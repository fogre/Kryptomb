import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Discography from './bodyComponents/Discography.js';
import Live from './bodyComponents/Live.js';
import News from './bodyComponents/News.js';

class Body extends Component {

  render() {
    return(	
      <Switch>
	    <Route exact path='/' component={News}/>
	    <Route path='/live' component={Live}/>
	    <Route path='/discography' component={Discography}/>
	  </Switch>
    );	
  }

}

export default Body;