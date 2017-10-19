var fs = require("fs");
var request = require("request");
var keys = require("./keys");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var apiCall = process.argv[2];


switch (apiCall){
	case text = "my-tweets":
			var twitterClient = new Twitter(keys.twitter);
			var params = {screen_name: 'wakandaCode'};
			twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
 			if (error) {
 			console.log(error);
 				}
 			else if (!error) {
  			for (var i = 0; i < tweets.length; i++) {
  			console.log(tweets[i].text);
  				}
			};
			});
			break;
	case text = "spotify-this-song":
			var spotifyClient = new Spotify(keys.spotify);
			spotifyClient.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  			if (err) {
    		return console.log('Error occurred: ' + err);
  			}
 
			console.log(data); 
});
			break;
	default: 
			console.log('Huh?');

};




// 	var twitterClient = new Twitter(keys.twitter);
// 	var params = {screen_name: 'wakandaCode'};
// 	twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
//  	if (error) {
//  		console.log(error);
//  	}
//  	else if (!error) {
//   	for (var i = 0; i < tweets.length; i++) {
//   	console.log(tweets[i].text);
//   	}
// };

// });

// };

