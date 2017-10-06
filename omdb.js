var key = require("./key.js");
var request =require('request');
var fs = require("fs");

var OMDB = function(){
	// console.log(this.query.replace(" ", "+"));
 this.movieSearch =function(query){
 	this.query = query
  request('http://www.omdbapi.com/?apikey='+key.api_key+'&type=movie&t='+this.query, function (error, response, body) {

  // * Title of the movie.
  var title = JSON.parse(body).Title;
  // * Year the movie came out.
   var year = JSON.parse(body).Year;
 // * IMDB Rating of the movie.
    var imdbRat = JSON.parse(body).Ratings[0].Value;
// * Rotten Tomatoes Rating of the movie.
  var rtRat = JSON.parse(body).Ratings[1].Value;
  // * Country where the movie was produced.
  var cont = JSON.parse(body).Country;
  // * Language of the movie.
  var lang = JSON.parse(body).Language;
  // * Plot of the movie.
    var plot = JSON.parse(body).Plot;
// * Actors in the movie.
  var act = JSON.parse(body).Actors;
  

  var retArr = [title, year, imdbRat, rtRat, cont, lang, plot, act];

	console.log("Title: "+retArr[0]+"\nYear: "+retArr[1]+"\nIMDB Rating: "+retArr[2]+"\nRotten Tomatoes Rating: "+retArr[3]+"\nProduced in: "+retArr[4]+"\nLanguage: "+retArr[5]+"\nPlot: "+retArr[6]+"\nActors: "+retArr[7]); 
	});
  }
}

module.exports = OMDB;
