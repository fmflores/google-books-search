// okay, I'll drop in a bit more boilerplate
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: String,
	authors: Array,
	description: String,
	image: String,
	link: String  
});

// lets to index.js

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;