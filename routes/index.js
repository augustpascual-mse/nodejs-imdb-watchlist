var express = require('express');
var http   = require('http');
var router = express.Router();
var movies = require('../movies');

router.get('/movies', function(req, res, next) {

  var imageUrl = [];
  var imageCount = 0;

  movies.getMovies.forEach(function(movieId){
      var promise = new Promise(function(resolve, reject) {
          http.get("http://omdbapi.com?i=" + movieId + "&plot=full&r=json", (res) => {
              imageCount++;
              let data = '';

              res.on("data", function(chunk) {
                  data = data + chunk;
              });

              res.on("end", function(){
                  let jsonData = JSON.parse(data);
                  imageUrl.push(jsonData.Poster);
                  if (imageCount == movies.getMovies.length) {
                      resolve(imageUrl);
                  }
              });
          });
      })

      promise.then((imageUrl) => {
          res.render('movies', { imageUrl: imageUrl });
      });

  });

});

module.exports = router;
