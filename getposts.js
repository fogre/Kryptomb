/*
A script to fetch posts from facebook Graph API and write them as "pre-rendered" HTML-file.
The page where posts are fetched is defined in FBconf.js file.
If the post type is Event, another query is made to get the event cover 
*/

const axios = require('./node_modules/axios/index.js');
const conf = require('./FBconf.local.js');

function checkPostType(postData, ind) {
  return new Promise(resolve => {
	  if( postData.attachments.data[0].type === 'event' ) {
	    resolve(getEventCover(postData, ind));
	  } else {
	    resolve(writePost(postData, ind));
	  }
  });
}

function createPostString(createdTime, message, imageUrl, eventUrl, index){
  let baseString = `<div key=${index}>
  <h2>${createdTime}</h2>
  <p>${message}</p>
`
  if( imageUrl ) {
	  baseString+=` <img src=${imageUrl} alt='post image' className='BodyNewsImage'/>
` }
  if( eventUrl ) {
	  baseString+=` <br><a href=${eventUrl} target='_blank' rel="noopener noreferrer" className='link'>Link</a>
` }
  return baseString + `</div>
`
}

function getEventCover(postData, index) {
  return new Promise(resolve => {
	  const eventId = postData.attachments.data[0].target.id;
	  axios.get(conf.getEventCover(eventId))
	    .then(result => {
	  	  imageUrl = result.data.cover.source;
	  	  resolve(writePost(postData, index, imageUrl));
	    })
	    .catch(error => {
	  	  console.log(error);
	    })
  });  
}

function iteratePosts(posts) {
  let current = Promise.resolve();
  let jsxStr = '';
  Promise.all(posts.map((postData, ind) => {
  	current = current.then( () => {
  	  return checkPostType(postData, ind);
  	}).then(result => {
  	  jsxStr += result;
  	});
    return current;
  })).then(results => {
	  writeToFile(jsxStr);
  });
}

function parseTime(createdTime) {
  return createdTime.substring(8,10) + '.'
		+ createdTime.substring(5,7) + '.'
		+ createdTime.substring(0,4);
}

function writePost(postData, ind, imageURL = '') {
  const postTime = parseTime(postData.created_time);
  const message = postData.message.replace(/\n/g, "<br>");
  let imageUrl = undefined;
  let eventUrl = undefined;
  if ( imageURL ) { 
	  imageUrl = imageURL;
	  eventUrl = postData.attachments.data[0].url;
  } else if ( postData.attachments.data[0].media.image.src ) { 
	  imageUrl = postData.attachments.data[0].media.image.src;
  }
  return createPostString(postTime, message, imageUrl, eventUrl, ind);
}

function writeToFile(stringy) {
  const fs = require('fs');
  fs.writeFile('./public/postsJSX', stringy, (err) => {
  	if (err) throw err;
  	console.log('The file has been saved to ./public/postJSX');
  });
}

//get posts
axios.get(conf.getQueryUrl())
  .then(result => {
	  iteratePosts(result.data.data);  	
  })
  .catch(error => {
  	console.log(error);
  });

