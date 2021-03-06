import React, { Component } from 'react';

import liveDates from '../data/liveDates.json';

class Live extends Component {

  render() {

  	let coming = liveDates.coming.map((date, index) => {
  	  return <div key={index}>
	      <p>{date.date}<br/>{date.location}: {date.event}</p>
	    </div>
  	});

  	let past = liveDates.past.map((date, index) => {
  	  return <div key={index}>
	      <p>{date.date} {date.location}: {date.event}</p>
	    </div>
  	});

    return(
      <div>	
    	  <h1>Live</h1>
        <br/>
    	  <h2>Upcoming</h2>
    	  {coming}
        <br/>
    	  <h2>Past</h2>
    	  {past}
      </div>	
    );	
  }

}

export default Live;