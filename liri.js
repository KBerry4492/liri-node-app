//Requires
var Spotify = require("./spotify.js");
var Twitter = require("./tweets.js");
var OMDB = require("./omdb.js");
var fs = require("fs");
var inquirer = require("inquirer");

//Inupts
var choice = process.argv[2];
var input = process.argv[3];

inquirer.prompt([
    {
        type: "list",
        name: "selection",
        message: "Choose an option",
        choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
    },
    {
        type: "prompt",
        name: "song",
        message: "What song would you like to look for?",
        when: function(answers){
            return answers.selection === "spotify-this-song";
        }
    },
    {
        type: "prompt",
        name: "movie",
        message: "What movie would you like to look for?",
        when: function(answers){
            return answers.selection === "movie-this";
        }
    },
    

]).then(function(answers){
	console.log(answers.selection);
	switch(answers.selection){
		case "my-tweets":
			var Twit = new Twitter;
			break;
		case "spotify-this-song":
			var spot = new Spotify;
			if (answers.song === ''){
				spot.SongSearch("The Sign Ace of Base");
			}
			else {
				spot.SongSearch(answers.song);
			}
			break;
		case "movie-this":
			var omdb = new OMDB;
			if (answers.movie === ''){
				omdb.movieSearch("Mr Nobody");
			}
			else {
				omdb.movieSearch(answers.movie);
			}
			break;

		case "do-what-it-says":
			fs.readFile('random.txt', 'UTF-8', (err, data) => {
			  if (err) throw err;
			  var rand = data.split("/");
			  console.log(rand[0], rand[1]);

			  //There has to be a better way to do this...but I have work in 1/2hr ~_~
			  if(rand[0] === "my-tweets"){
					var Twit = new Twitter;
					}
			  else if(rand[0] === "spotify-this-song"){
					var spot = new Spotify;
					if (rand[1] === ''){
						spot.SongSearch("The Sign Ace of Base");
					}
					else {
						spot.SongSearch(rand[1]);
					}
				}
			  else if(rand[0] === "movie-this"){
					var omdb = new OMDB;
					if (rand[1] === ''){
						omdb.movieSearch("Mr Nobody");
					}
					else {
						omdb.movieSearch(rand[1]);
					}
				}
			});
		break;
		
	}
});


//my-tweets

//show the last 20 tweets and when they were created

//spotify-this-song

//show the Artist(s), song name, preview link, and album
// default to The Sign by Ace of Base

//movie-this
  // * Title of the movie.
  // * Year the movie came out.
  // * IMDB Rating of the movie.
  // * Rotten Tomatoes Rating of the movie.
  // * Country where the movie was produced.
  // * Language of the movie.
  // * Plot of the movie.
  // * Actors in the movie.

  // default of Mr Nobody

//do-what-it-says
// check the random.txt and use it to call a command
//  defualt song I Want it That Way

