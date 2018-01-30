const axios = require('./node_modules/axios/index.js');
const conf = require('./FBconf.local.js');
const testData = require('./src/posts.json');

let jsxString = '';

const parseTime = (createdTime) => {
	return createdTime.substring(8,10) + '.'
			+ createdTime.substring(5,7) + '.'
			+ createdTime.substring(0,4);
}

function call() {
	return new Promise(resolve => {
		resolve('kakka');
	});
}

const axiosCall = (postData, index) => {
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

const writePost = (postData, ind, imageURL = '') => {
	const postTime = parseTime(postData.created_time);
	const message = postData.message.replace(/\n/g, "<br>");
	let imageUrl = undefined;
	let eventUrl = undefined;
	if ( imageURL ) { 
		console.log("im comign here!")
	  imageUrl = imageURL;
	  eventUrl = postData.attachments.data[0].url;
	} else if ( postData.attachments.data[0].media.image.src ) { 
	  imageUrl = postData.attachments.data[0].media.image.src;
	}
	return createPost(postTime, message, imageUrl, eventUrl, ind);
}

const createPost = (createdTime, message, imageUrl, eventUrl = undefined, index) => {
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


async function createPosts (postData, ind) {
	return new Promise(resolve => {
	  if( postData.attachments.data[0].type === 'event' ) {
	    resolve(axiosCall(postData, ind));
	  } else {
	    resolve(writePost(postData, ind));
	  }
	});
}

async function asyncPosts(posts) {
	let current = Promise.resolve();
	let jsxStr = '';
	Promise.all(posts.map((postData, ind) => {
	  current = current.then( () => {
	  	return createPosts(postData, ind);
	  }).then(result => {
	  	jsxStr += result;
	  });
	  return current;
	})).then(results => {
		writeToFile(jsxStr);
	});
}

/*
const create = async () => {
	let jsxString = '';
	testData.data.map((postData, ind) => {
		let postTime = parseTime(postData.created_time);
		let message = postData.message.replace(/\n/g, "<br>");
		let imageUrl = undefined;
		let eventUrl = undefined;
		if( postData.attachments.data[0].type === 'event' ) {
		  	getEvent(postData, ind, jsxString);
		  	eventUrl = postData.attachments.data[0].url;

		} else {
			imageUrl = postData.attachments.data[0].media.image.src;
		}
		jsxString += createPost(postTime, message, imageUrl, eventUrl, ind);
	});
	console.log(jsxString);
	writeToFile(jsxString);
}*/

asyncPosts(testData.data);
/*
const getEvent = async (eventId, imageUrl) => {
	try{
	 	await axiosCall(eventId, imageUrl);
	 	console.log(imageUrl);
	} catch (error) {
		console.log(error);
	}
}
*/
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

