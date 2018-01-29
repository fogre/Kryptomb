const axios = require('./node_modules/axios/index.js');
const conf = require('./FBconf.local.js');
const testData = require('./src/posts.json');

const parseTime = (createdTime) => {
	return createdTime.substring(8,10) + '.'
			+ createdTime.substring(5,7) + '.'
			+ createdTime.substring(0,4);
}

const getEvent = async (eventId, imageUrl) => {
	try{
	 	axiosCall(eventId, imageUrl);
	 	console.log(imageUrl);
	} catch (error) {
		console.log(error);
	}
}

const axiosCall = (eventId, imageUrl) => {
		axios.get(conf.getEventCover(eventId))
	  .then(result => {
	  	console.log(result.data);
	  	imageUrl = result.data;
	  })
	  .catch(error => {
	  	console.log(error);
	  })
}

const createPost = (createdTime, message, imageUrl, eventUrl = '', index) => {
	let baseString = `<div key=${index}>
 <h2>${createdTime}</h2>
 <p>${message}</p>
 <img src=${imageUrl} alt='post image'/>
`
	if( eventUrl ) {
		baseString+=` <a href=${eventUrl} target='_blank' rel="noopener noreferrer">Link</a>`
	}
	return baseString + `</div>
`
}

const writeToFile = (stringy) => {
	const fs = require('fs');
	fs.writeFile('./public/postsJSX', stringy, (err) => {
  	  if (err) throw err;
  	  console.log('The file has been saved to ./public/postJSX');
	});
}

const create = () => {
	let jsxString = '';
	testData.data.map((postData, ind) => {
		let postTime = parseTime(postData.created_time);
		let message = postData.message.replace(/\n/g, "<br>");
		let imageUrl = undefined;
		let eventUrl = undefined;
		while ( !imageUrl ) { 
		if( postData.attachments.data[0].type === 'event' ) {
		  	getEvent(postData.attachments.data[0].target.id, imageUrl);
		  	eventUrl = postData.attachments.data[0].url;

		} else {
			imageUrl = postData.attachments.data[0].media.image.src;
		}
		}
		jsxString += createPost(postTime, message, imageUrl, eventUrl, ind);
	});
	writeToFile(jsxString);
}

create();

/*
let jsxString = '';
testData.data.map((postData, ind) => {
	let postTime = parseTime(postData.created_time);
	let message = postData.message.replace(/\n/g, "<br>");
	let imageUrl = '';
	let eventUrl = undefined;
	if( postData.attachments.data[0].type === 'event' ) {
		imageUrl = getEvent(postData.attachments.data[0].target.id);
		eventUrl = postData.attachments.data[0].url;
	} else {
		imageUrl = postData.attachments.data[0].media.image.src;
	}
	jsxString += createPost(postTime, message, imageUrl, eventUrl, ind);
});
writeToFile(jsxString);*/


/*
axios.get('./src/posts.json')
	.then(result => {
		let data = result.data.data;
		console.log(data);

	})
	.catch(error =>{
		console.log(error);
	});
*/

