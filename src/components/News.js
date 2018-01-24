import React, { Component } from 'react';
import axios from 'axios';
import FBposts from '../posts.json';

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
  	this.posts = FBposts.data;
  }

  componentDidMount() {
  	//this.getPosts();
  }

 /* getPosts() {
  	axios.get('posts.json')
  	  .then(result => {
  	  	console.log(result.data.data[0]);
  	  	this.posts = result.data.map((postData, index) => {
		  	let image = postData.attachments.data.map((imageData, index) => {
		  	return(
		  		<div key={index}>
		  		  <img src={imageData.media.image.src} alt='post info'/>
		  		</div>  
		  	);
		  });
		  return(
			<div key={postData.id}>
			  <h2>{postData.created_time}</h2>
			  {image}
			</div>
		  );
	  	});
  	  })
  	  .catch(error => {
  	  	console.log(error);
  	  });
  }

  getPostData() {
  	let posts = this.posts.map((postData, index) => {
	  let image = postData.attachments.data.map((imageData, index) => {
	  	return(
	  		<div key={index}>
	  		  {(() => {
	  		  	switch (imageData.type) {
	  		  	  case "event":
	  		  	    return <a href={imageData.url} target='_blank'
	  		  	        rel="noopener noreferrer">{imageData.title}</a>
	  		  	  default:
	  		  	    return <img src={imageData.media.image.src} alt='post info'/>
	  		  	}
	  		   })()}
	  		   <p>{imageData.type}</p>
	  		</div>  
	  	);
	  });
	  return(
		<div key={postData.id}>
		  <h2>{postData.created_time}</h2>
		  {image}
		</div>
	  );
  	});
  	return posts;
  }*/

  render() {
    let posts = this.posts.map((postData, index) => {
	  let image = postData.attachments.data.map((imageData, index) => {
	  	return(
		  <div key={index}>
	  		{(() => {
	  		  switch (imageData.type) {
	  		  	case "event":
	  		  	  return <a href={imageData.url} target='_blank'
	  		  	    rel="noopener noreferrer">{imageData.title}</a>
	  		  	default:
	  		  	  return <img src={imageData.media.image.src} alt='post info'/>
	  		  }
	  		})()}
	  		<p>{imageData.type}</p>
	  	  </div> 
	  	);
	  });
	  return(
		<div key={index}>
		  <h2>{postData.created_time}</h2>
		  <p>{postData.message}</p>
		  {image}
		  </div>
	  );
  	});

    return(
      <div>
        <h1>NEWS</h1>
        {posts}
	  </div>
    );	
  }

}

export default News;