import React, { Component } from 'react';

import newsposts from '../data/news.json';

class News extends Component {

  render() {

    let news = newsposts.posts.map(post => {
      let postImage = (post.hasOwnProperty("image")) ? <img src={post.image} alt='' className='BodyNewsImage'/> : null;
      return <div key={post.date}>
        <h2>{post.date}</h2>
        <p>{post.text}</p>
        {postImage}
      </div>
    });
  	
    return(
      <div>
        <p>Finnish Death Doom. Formed in 2008. Contact:<br/>
          <span className="ok">&#x6D;&#x6F;&#x63;&#x2E;&#x6C;&#x69;&#x61;&#x6D;&#x67;&#x40;&#x68;&#x74;&#x61;&#x65;&#x64;&#x73;&#x74;&#x70;&#x79;&#x72;&#x4B;</span>
        </p>
        <h1>News</h1>
        {news}
	    </div>
    );	
  }

}

export default News;