const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/Movie');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/movies-db')
    .then(() => console.log('connection open'))
    .catch((err) => console.log(err));

app.get('/movies', async(req, res) => {
    const movies = await Movie.find({});
    res.json(movies);
})

app.listen(3000, () => {
    console.log('server started at port 3000');
});
