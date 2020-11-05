// Entry point for server JavaScript

const express = require('express');
const app = express();
//morgan for debugging
const morgan = require('morgan');
//bodyParser to access req.body
const bodyParser = require('body-parser');
// port variable with something that apparently "can be very useful if you deploy to Heroku!"
const port = process.env.PORT || 3000;
// path? is for.. like, './public' and the whole path.joinnbut i forget specifics here
const path = require('path');

app.use(morgan('dev'));

// app.use(express.static(path.join(__dirname, './path/to/static/assets')));
// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, './public')));

//allows us to access req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Any routes or other various middlewares should go here!  */

// matches all requests to /api
app.use('/api', require('./api'));

//Because we generally want to build single-page applications (or SPAs), our server should send its index.html for any requests that don't match one of our API routes.
//Make sure this is after all of your routes in your server entry file!
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//Catch 500 Errors; make sure this is at the very end of your server entry file!
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(port, function () {
  console.log('Knock, knock');
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
