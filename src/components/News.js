import React, { Component } from 'react';

var newsStyle = {
	color: 'yellow'
}

//asdasdasd
class News extends Component {


  render() {
  	var accestoken = '139858906814014|R2KakcWMqUg9u07ZlS7mT99KfZ4';
  	var query = 'Kryptsdeath/posts?fields=id,message,link,attachments{media}&limit=5';
    return(	
    	<h1>NEWS</h1>
    );	
  }

}

export default News;