var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

//Models
var Movie = require('../models/Movie.js');

var db = mongoose.connection;

/* GET movies listing */
router.get('/', function (req, res) {
    Movie.find()
    .then(movies => res.status(200).json(movies))
    .catch(err => res.status(500).send(err));
});

/* GET single movie by Id */
router.get('/:id', function (req, res, next) {
    Movie.findById(req.params.id)
    .then(movieinfo => res.status(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;