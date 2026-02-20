const { ApiResponse } = require('../core/ApiResponse');

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

const getAllMovies = (req, res) => {
    // Implement Pagination by yourself
    res.status(200).json(ApiResponse.build(true, movies, 'All movies'));
}

const createMovie = (req, res) => {
    const { title, year } = req.body;
    const newMovie = {
        id: movies.length + 1,
        title: title,
        year: year,
        isWatched: false
    }

    movies.push(newMovie);

    res.status(201).json(ApiResponse.build(true, null, `movie with id ${newMovie.id} created`))
}

const getAMovie = (req, res) => {
    const { id } = req.params;

    const movie = movies.find((m) => m.id === parseInt(id));

    // if movie if now found then we should throw the exception. TBD in next class.

    res.json({
        success: true,
        data: movie,
        message: `Movie with id ${id}`
    })
}

const updateAMovie =(req, res) => {
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
}

const deleteAMovie = (req, res) => {
    res.send('Its a homework');
}

module.exports = {
    getAllMovies,
    createMovie,
    getAMovie,
    updateAMovie,
    deleteAMovie
}