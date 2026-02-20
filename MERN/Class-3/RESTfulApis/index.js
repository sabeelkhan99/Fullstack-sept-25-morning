const express = require("express");
const { ApiResponse } = require('./core/ApiResponse');

const app = express();

app.use(express.json());

const movies = [
    {
        id: 1,
        title: 'Ironman',
        year: 2010,
        isWatched: true
    },
    {
        id: 2,
        title: 'Spiderman',
        year: 2013,
        isWatched: true
    },
    {
        id: 3,
        title: 'Batman',
        year: 2015,
        isWatched: false
    }
];

// GET All the movies
app.get('/movies', (req, res) => {
    // Implement Pagination by yourself
    res.status(200).json(ApiResponse.build(true, movies, 'All movies'));
});

// Create a new movie
app.post('/movies', (req, res) => {
    const { title, year } = req.body;
    const newMovie = {
        id: movies.length + 1,
        title: title,
        year: year,
        isWatched: false
    }

    movies.push(newMovie);

    res.status(201).json(ApiResponse.build(true, null, `movie with id ${newMovie.id} created`))
});

// GET Single movie
app.get('/movies/:id', (req, res) => {
    const { id } = req.params;

    const movie = movies.find((m) => m.id === parseInt(id));

    // if movie if now found then we should throw the exception. TBD in next class.

    res.json({
        success: true,
        data: movie,
        message: `Movie with id ${id}`
    })
});

// Update a movie
app.patch('/movies/:id', (req, res) => {
    const { id } = req.params;

    const { title, year } = req.body;

    // find a movie with `id` given in params.
    const movie = movies.find((m) => m.id === parseInt(id));

    // performing an update to a found movie object
    movie.title = title;
    movie.year = year;

    res.json({
        success: true,
        data: movie,
        message: 'Updated the movie successfully'
    })
});

// DELETE a movie
app.delete('/movies/:id', (req, res) => {
    res.send('Its a homework');
});

app.listen(8080, () => {
    console.log('server started at port 8080');
})