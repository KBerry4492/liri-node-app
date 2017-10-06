var Twitter = require('twitter');
var key = require("./key.js");
 
var client = new Twitter({
  consumer_key: key.consumer_key,
  consumer_secret: key.consumer_secret,
  access_token_key: key.access_token_key,
  access_token_secret: key.access_token_secret
});
 
var GetTweets = function(){
	client.get('statuses/user_timeline', function(error, tweets, response) {
	  if(error) throw error;

	  for (var i = 0; i < tweets.length; i++) {
	  	var tweeted = tweets[i].created_at;
	  	var text = tweets[i].text;
	  	var name = tweets[i].user.name;

	  	console.log((i+1)+":"+name+ " tweeted: "+text+" at: "+tweeted);

	  }
	  // console.log(response);  // Raw response object. 
	});
}

module.exports = GetTweets;