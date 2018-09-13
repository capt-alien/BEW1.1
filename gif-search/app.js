// var express = require('express');
// var app = express();
//
// app.listen(3000, function () {
//   console.log('Gif Search listening on port localhost:3000!');
// });

// app.js
var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/hello-gif', function (req, res) {
  var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
  res.render('hello-gif', {gifUrl: gifUrl})
});


  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
