/*A conf file for facebook graph api querys*/

//The graph api entry point
const graphBaseUrl = 'https://graph.facebook.com/';
//Name of the site where to look for info
const siteName = '';
//First query parameter, i.e posts, feed etc.
const firstParam = '';
//Access token
const Accestoken = '';
//query fields
const queryFields = 'created_time,message,link,attachments&limit=5'

module.exports = {
	getQueryUrl: () => {
		return graphBaseUrl + siteName + '/' + firstParam + '?key=value&access_token='
		  + Accestoken + '&fields=' + queryFields;
	},
	getEventCover: (eventID) => {
		return graphBaseUrl + eventID + '?key=value&access_token=' + Accestoken
			+ '&fields=cover';
	}
}
