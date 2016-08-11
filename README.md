# Welcome to the {Name of our mysterious awesome project} 's Readme!
======

## Overview:
This app started off very simply and then evolved into something much more complex, however it asks very little of the user. In short, the user simply types in the artist and song title they are curious about and are provided with album cover, artist bio, the lyrics and an analysis of the tone of the lyrics. Additionally, the user can ask watson to read the lyrics to them, which results in Watson reading over the songs instrumentals. The non-instrumental music video is also provided from youtube if the user is so inclined to listen to the artist sing the song instead of Watson's gentle monotone.


##  Tech Specs: 
This app was built using React, React-Router, Node.js, Firebase DB, Materialize and a number of API's (Youtube Data, MusixMatch, LastFM, Urban Dictionary, Watson Text-to-Speech and Watson Tone Analysis).

##  Responsibilities: 
We initially broke up our responsibilities by API -- so Denis figured out Youtube, Hiro worked with MusixMatch and Maggie with the Youtube API. We each ran into our own sets of difficulties which were very collaborative on how to fix -- generally it just meant moving the API calls to our Node backend instead of from our utils. After getting all of those components working, we decided to work on our second API's -- for Hiro that was LastFM, Denis took on Watson Text-To-Speech and Maggie struggled with Watson's Tone Analysis. Again, we hit a few road blocks but were able to collaborate to figure out what went wrong. We spent the majority of one day figuring out our Routes and setting up Firebase, both of which were difficult as our app was fully functional and every large change seemed to break something. Firebase truly hated the syntax of some song/artist titles so we really had to work together to figure out a solution that would allow us to both add and delete some of the more syntaxically-interesting titles (i.e. Oops!... I did it Again). Most importantly, Maggie took the time to write this wonderful readMe.
