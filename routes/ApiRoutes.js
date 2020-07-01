const router = require('express').Router();
const mongoose = require('mongoose');

const db = require('../models');

router.post('/books', (req, res)=> {
    console.log(req.body);
    console.log('Just heard a request.');
    db.Book.create(req.body).then(() => res.send('Book saved'));
});

router.get('/books', (req, res) => {
    console.log('get route success');
    db.Book.find().then((data) => res.json(data));
});

router.delete('/books/:id', (req, res) => {
    db.Book.findByIdAndDelete(_id)
})


module.exports = router;
