import React, { Component } from 'react';
import liveDates from '../liveDates.json';

class Live extends Component {

  render() {

  	let coming = liveDates.coming.map((date, index) => {
  	  return <div key={index}>
	      <p>{date.date} {date.location}: {date.event}</p>
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
    	  <h2>Coming</h2>
    	  {coming}
    	  <h2>Past</h2>
    	  {past}
      </div>	
    );	
  }

}

export default Live;