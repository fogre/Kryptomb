import React, { Component } from 'react';

import disco from '../data/disco.json';

class Discography extends Component {

  render() {

  	let albums = disco.albums.map(album => {
  	  return <div key={album.name}>
	    <h3>{album.name}</h3>
	    <iframe className="BodyDiscoAlbum" 
	    	src={album.bandcamp.src} seamless title={album.name}>
	    	<a href={album.bandcamp.href}>{album.name}</a>
	    </iframe>
	    <ol className="BodyDiscoTracklist">
	       {album.tracklist.map(track => {
		     return <li key={track}>{track}</li>
	       })}
	    </ol>
	    <p>Released {album.date}</p>
  	  </div>
  	});

    return(	
      <div>	
    	<h1>Discography</h1>
    	{albums}
      </div>	
    );	
  }

}

export default Discography;