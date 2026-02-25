const mongoose = require('mongoose');
const Movie = require('./models/Movie');

mongoose.connect('mongodb://127.0.0.1:27017/movies-db')
    .then(() => console.log('connection open'))
    .catch((err) => console.log(err));

async function main() {
    // const spiderman = new Movie({
    //     title: 'Spiderman',
    //     rating: 8,
    //     year: 2015,
    //     isWatched: false
    // });

     const batman = new Movie({
        title: 'Batman',
        rating: 9.9,
        year: 2017,
        isWatched: true
    });

    // Object of class Movie
    // console.log(spiderman);
    // await spiderman.save(); 
    await batman.save(); 
    console.log('Movie saved');
}

main();