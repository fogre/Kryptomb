import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Discography from './bodyComponents/Discography.js';
import Live from './bodyComponents/Live.js';
import News from './bodyComponents/News.js';

class Body extends Component {

  render() {
    return(	
      <main>
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