require("dotenv").config();
var request = require("request");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv[3];

function concert() {
    var bisURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    request(bisURL, function(error, response, body){
        if (!error && response.statusCode === 200) {
            var output = JSON.parse(body);
            for(i=0; i<output.length; i++){
                console.log("Venue: " + output[i].venue.name);
                console.log("Location: " + output[i].venue.city + ", " + output[i].venue.region);
                console.log("Date: " + moment(output[i].datetime).format("MM/DD/YYYY"));
                console.log(" ");
            }
        }
    })
}
function movieSearch() {
    var omdbURL = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=e6a81e5";
    request(omdbURL, function(error, response, body){

        if (!error && response.statusCode === 200) {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            var ratings = JSON.parse(body).Ratings;
            for(i=0;i<ratings.length;i++){
                if(ratings[i].Source == "Rotten Tomatoes"){
                    console.log("Rotten Tomatoes Rating: " + ratings[i].Value);
                }
            }
            console.log("Produced in: " + JSON.parse(body).Country);
            console.log("Languages: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    
    })
}

function spotifySearch() {
    spotify.search({ type: "track", query: input})
        .then(function(response){
            var output = response.tracks.items;
            for(i=0;i<output.length;i++){
                var artists = output[i].artists;
                for(j=0;j<artists.length;j++){
                    console.log("Artist: " + artists[j].name);
                }
                console.log("Song name: " + output[i].name);
                console.log("Spotify link: " + output[i].external_urls.spotify);
                console.log("Album: " + output[i].album.name);
                console.log(" ");
            }
        })
        .catch(function(err){
            console.log(err);
        })
}
if(command == "concert-this"){
   concert()
} else if(command == "spotify-this-song"){
    if(input === undefined){
        input = "The Sign"
    }
      spotifySearch()  
}
// //OMDb Movies
else if(command == "movie-this"){
    if(input === undefined){
        input = "Mr. Nobody"
    }
        movieSearch()
}
//Taking request from random.txt
else if(command == "do-what-it-says"){
    fs.readFile("random.txt", "utf8", function(error, data){
        
        if(error){
            return console.log(error);
        }

        var dataArr = data.split(",");

        if(dataArr[0] == "concert-this"){
            input = dataArr[1];
            concert()
        }
        //Default spotify search
        else if(dataArr[0] == "spotify-this-song"){
            if(dataArr[1] === undefined){
            input = "The Sign"
            }
            else{
                input = dataArr[1];
                spotifySearch()
            }
        }
        else if(command == "movie-this"){
            if(dataArr[0] === undefined){
                input = "Mr. Nobody"
            }
            else{
                input = dataArr[1];
                movieSearch()
            }
        }
    })
}
else{
    console.log("ERROR: input a valid command.");
}