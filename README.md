# liri-node-app
This is application uses Node.js to create a LIRI application (Language Interpretation and Recognition Interface) which allows the user to use the command line node app that accepts the values of certain parameters and returns data. For instance, a user can run node liri.js and include the following command and it will output the data related to the user’s request.

# How to use
Install npm packages via terminal command line. 

Use ```npm init -y``` to initialize a package.json file. If you fail to initialize a package.json file, it will be nearly impossible for anyone else to run your code after cloning your project.
![liribotstart](https://user-images.githubusercontent.com/46514256/53185776-4b51eb00-35c5-11e9-8c16-9a180bfb7b6c.png)


# What each command should do:

**Retrieves song information for a track. If track is undefined, song defaults to "The Sign" by Ace of Base.**
```
spotify-this-song
```
Spotify Song Search: Baby Shark
![babysharkspotify](https://user-images.githubusercontent.com/46514256/53214016-9a713d80-3610-11e9-95fb-a7679897598f.png)

Spotify Default

![spotifydefault](https://user-images.githubusercontent.com/46514256/53214565-a9f18600-3612-11e9-8d12-c3ffaff2343c.png)



**Retrieves movie information for a movie. If no movie is undefined, movie defaults to "Mr. Nobody".**
```
movie-this
```
OMDb Movie Search: Forrest Gump
![movie-thisforrestgump](https://user-images.githubusercontent.com/46514256/53213661-6cd7c480-360f-11e9-998e-440fe0a975cc.png)

OMDb Default

![movie-thisdefault](https://user-images.githubusercontent.com/46514256/53213995-862d4080-3610-11e9-9682-b5552a79d035.png)


**Retrieves venue location and date of event for a concert.**
```
concert-this
```
Bands in Town

![concert-thismaroon5](https://user-images.githubusercontent.com/46514256/53214314-c3de9900-3611-11e9-84cc-c2ecfb693146.png)


**Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI’s commands.**
```
do-what-it-says
```
read files from random.txt

![do-what-it-says](https://user-images.githubusercontent.com/46514256/53214363-ea9ccf80-3611-11e9-867a-bfd415ac3567.png)



# Built with:
* Visual Studio Code
* Javascript
* Node.js 
* JSON (http://www.json.org) - Data format used
* Spotify API (https://developer.spotify.com/documentation/web-api) - API for music
* OMDB API (http://www.omdbapi.com) - API for movies
