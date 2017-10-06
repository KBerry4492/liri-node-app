var key = require("./key.js");
var Spotify = require('node-spotify-api');


var newSong = function(){
 
	this.spotify = new Spotify({
	  id: key.client_id,
	  secret: key.client_secret
	});

	this.SongSearch = function(song){
		this.song = song;

		this.spotify
		  .search({ type: 'track', query: this.song , limit: 1})
		  .then(function(response) {
		  	var songArtist = JSON.stringify(response.tracks.items[0].artists[0].name,null,2);
		  	var albumName = JSON.stringify(response.tracks.items[0].album.name,null,2);
		  	var songName = JSON.stringify(response.tracks.items[0].name,null,2);
		  	var prevLink = JSON.stringify(response.tracks.items[0].preview_url,null,2);
		    
		    var resString = 'Artist: '+songArtist+", Name of Album: " +albumName+", Song Name: "+songName+", Preview Link: "+prevLink;

		    console.log(resString);
		  })
		  .catch(function(err) {
		    console.log(err);
		  });
	}
}

module.exports = newSong;