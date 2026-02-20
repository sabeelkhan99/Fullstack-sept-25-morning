const express = require('express');
const { getAllMovies, getAMovie, createMovie, updateAMovie, deleteAMovie } = require('../controllers/movies');

const router = express.Router();

// GET All the movies
router.get('/', getAllMovies);

// Create a new movie
router.post('/', createMovie);

// GET Single movie
router.get('/:id', getAMovie);

// Update a movie
router.patch('/:id', updateAMovie);

// DELETE a movie
router.delete('/:id', deleteAMovie);

module.exports = router;