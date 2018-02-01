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
        <h1>NEWS</h1>
        {Parser(this.state.posts)}
	  </div>
    );	
  }

}

export default News;