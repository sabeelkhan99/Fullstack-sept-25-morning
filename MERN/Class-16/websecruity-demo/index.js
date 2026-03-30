const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/movies-db')
    .then(() => console.log('connection open'));

app.use(express.json()); 

// Mongo Injection
app.use(mongoSanitize());

// XSS
app.use(helmet());

app.get('/search', async (req, res) => {
    console.log(req.query.q)
    const movies = await Movie.find({title: req.query.q});
    res.json(movies);
});

app.listen(3000, () => {
    console.log('server started at 3000');
})