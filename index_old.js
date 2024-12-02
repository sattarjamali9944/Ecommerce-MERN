var express = require('express');
var app = express();
let ejs = require('ejs');
let path = require('path');

app.set('views', path.join(__dirname, 'views'));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'assets')));
// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
    res.render('user/dashboard');
});

// about page
app.get('/about', function (req, res) {
    res.render('pages/about');
});

app.listen(3000);
console.log('Server is listening on port 3000');