import React, { Component } from 'react';

import disco from '../data/disco.json';

class Discography extends Component {

  render() {

  	let albums = disco.albums.map(album => {
      let albumCover = album.bandcamp ?
        ( <iframe className="BodyDiscoAlbum" 
            src={album.bandcamp.src} seamless title={album.name}>
            <a href={album.bandcamp.href}>{album.name}</a>
          </iframe>
        ) : ( <img src="/open.jpeg" alt="open" className="BodyDiscoAlbum"/> );

  	  return <div key={album.name}>
  	    {albumCover}
        <h3>{album.name}</h3> 
  	    <p className="BodyDiscoTracklist">
  	       {album.tracklist.map(track => {
  		     return <li key={track}>{track}</li>
  	       })}
  	    </p>
  	    <p>Released {album.date}</p>
        <br/>
  	  </div>
  	});

    return(	
      <div>	
    	 <h1>Discography</h1>
       <br/>
    	 {albums}
      </div>	
    );	
  }

}

export default Discography;
