const router = require('express').Router();
const mongoose = require('mongoose');

const db = require('../models');

router.post('/search', (req, res)=> {
    console.log(req.body);
    console.log('Just heard a request.');
    db.Book.create(req.body).then(() => res.send('Book saved'));
});

router.get('/favs', (req, res) => {
    console.log('get route success');
    db.Book.find().then(() => res.json());
});

router.delete('/search/:id', (req, res) => {
    db.Book.findByIdAndDelete(_id)
})


module.exports = router;
