var key = require("./key.js");
var request =require('request');
var fs = require("fs");

var OMDB = function(){
	// console.log(this.query.replace(" ", "+"));
 this.movieSearch =function(query){
 	this.query = query
  request('http://www.omdbapi.com/?apikey='+key.api_key+'&type=movie&t='+this.query, function (error, response, body) {

  // * Title of the movie.
  // * Year the movie came out.
  // * IMDB Rating of the movie.
  // * Rotten Tomatoes Rating of the movie.
  // * Country where the movie was produced.
  // * Language of the movie.
  // * Plot of the movie.
  // * Actors in the movie.
  var title = JSON.parse(body).Title;
  var year = JSON.parse(body).Year;
  var imdbRat = JSON.parse(body).Ratings[0].Value;
  var rtRat = JSON.parse(body).Ratings[1].Value;
  var cont = JSON.parse(body).Country;
  var lang = JSON.parse(body).Language;
  var plot = JSON.parse(body).Plot;
  var act = JSON.parse(body).Actors;
  

  var retArr = [title, year, imdbRat, rtRat, cont, lang, plot, act];

	console.log("Title: "+retArr[0]+"\nYear: "+retArr[1]+"\nIMDB Rating: "+retArr[2]+"\nRotten Tomatoes Rating: "+retArr[3]+"\nProduced in: "+retArr[4]+"\nLanguage: "+retArr[5]+"\nPlot: "+retArr[6]+"\nActors: "+retArr[7]); 
	});
  }
}

module.exports = OMDB;
