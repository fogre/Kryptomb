import React, { Component } from 'react';

import axios from 'axios';
import Parser from 'html-react-parser';

class News extends Component {

  constructor() {
  	super();
  	this.state = {
  		posts: '<p>loading...</p>'
  	}
  }

  componentDidMount() {
  	this.getJSXFile();
  }

  getJSXFile() {
  	axios.get('postsJSX')
  	  .then(result => {
  	  	this.setState({posts: result.data});
  	  })
  	  .catch(error => {
  	  	console.log(error);
  	  });
  }

  render() {
  	
    return(
      <div>
        <p>Finnish Death Doom. Formed in 2008. Contact:<br/>
          <span className="ok">&#x6D;&#x6F;&#x63;&#x2E;&#x6C;&#x69;&#x61;&#x6D;&#x67;&#x40;&#x68;&#x74;&#x61;&#x65;&#x64;&#x73;&#x74;&#x70;&#x79;&#x72;&#x4B;</span>
        </p>
        <h1>News</h1>
        {Parser(this.state.posts)}
	    </div>
    );	
  }

}

export default News;