const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    rating: Number,
    isWatched: Boolean,
    year: Number
}, {versionKey: false, timestamps: true});

// Movie -> movies 
// User -> users

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;