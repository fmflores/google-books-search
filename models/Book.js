
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: String,
	authors: Array,
	description: String,
	image: String,
	link: String ,
	_id: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;