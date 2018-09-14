
// app.js
var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

// REQUIRE HTTP MODULE
var http = require('http');
var giphy = require('giphy-api')();

app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
  giphy.search(req.query.term, function (err, response) {
    res.render('home', {gifs: response.data})
  });
});


  http.get(url, function(response) {
    // SET ENCODING OF RESPONSE TO UTF8
    response.setEncoding('utf8');

    var body = '';

    response.on('data', function(d) {
      // CONTINUOUSLY UPDATE STREAM WITH DATA FROM GIPHY
     body += d;
    });

    response.on('end', function() {
      // WHEN DATA IS FULLY RECEIVED PARSE INTO JSON
      var parsed = JSON.parse(body);
      // RENDER THE HOME TEMPLATE AND PASS THE GIF DATA IN TO THE TEMPLATE
      res.render('home', {gifs: parsed.data})
    });
  });
})
app.get('/hello-gif', function (req, res) {
  var gifUrl = 'https://i.giphy.com/media/l41m1fsyxDSRgjqMM/giphy.webp';
  res.render('hello-gif', {gifUrl: gifUrl});
});


app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
)}
