const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// okay and inside there, make an index file, and Book.js file
// mongoose.connect(process.env.MONGODB_URI || 'http://localhost/googlebooks')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.get('/test', (req, res) => {
  // so lets create some data inside here

  db.Book.create({
    title: 'Some Book',
    authors: [
      'Frank',
      'Diarmuid'
    ],
    description: 'some description here',
    image: 'https://via.placeholder.com/150',
    link: 'www.google.com'
  })
    .then(() => res.send('Book saved'));
});

// okay, lets deploy to heroku, and test there.
// ok sorry how do i deploy to heroku
//from terminal?
// oh wait, just add and commit changes and push to heroku 
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
