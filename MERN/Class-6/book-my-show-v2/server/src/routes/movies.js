const express = require('express');
const Movie = require('../models/Movie');
const ApiResponse = require('../core/ApiResponse');

const router = express.Router();

router.get('/movies', async (req, res) => {
    const movies = await Movie.find({});
    res.json(ApiResponse.build(true, movies, 'All movies'));
});

module.exports = router;