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

// mongoose.connect(process.env.MONGODB_URI || 'http://localhost/googlebooks')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use("/api", require("./routes/ApiRoutes"))
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
