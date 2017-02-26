## Nodejs IMDB API

Nodejs IMDB API is a simple application and server that will display your movies to watch in a web page.

Motivation:
I have tons of movies in my watch list and I pick one every weekend, I try to watch one movie to relax and have fun so I decided to create a simple page that will display the posters of all the movies in my watch list. It was quick and easy using nodejs and omdbapi.com

### Instructions

1. Install required modules npm Install
2. Create a movie.js and add your movies imdb id
`var moviesId = [
'tt123456',
'tt234567',
'tt345678',
]

function getMovies()
{
  return moviesId;
}

module.exports.getMovies = getMovies();`

3. npm start
4. Go to your localhost:8000/movies to see your watch list
