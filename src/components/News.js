import React, { Component } from 'react';
import axios from 'axios';
import FBposts from '../postsJSX';
import Parser from 'html-react-parser';

/*var newsStyle = {
	color: 'yellow'
}*/

/*
1. Erillinen scripti
2. Scripti hakee 5 viimeisintä postausta ja päivittää tekstitiedoston
3. Scripti pushaa githubiin
4. Staattínen websivu hakee tekstitiedostsosta filut
*/

//asdasdasd
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