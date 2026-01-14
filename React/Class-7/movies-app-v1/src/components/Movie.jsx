import React, { useContext } from 'react';
import WatchListContext from '../store/watchlist-context';

const Movie = (props) => {

    // Consuming the context
    const context = useContext(WatchListContext);

    const addToWatchListHandler = () => {
        const movie = {
            title: props.title,
            posterPath: props.posterPath,
            releaseDate: props.releaseDate
        }
        context.addToWatchList(movie);
    }

    return (
        <figure className='w-2xs'>
            <img className='w-2xs rounded-lg' src={`https://image.tmdb.org/t/p/w400/${props.posterPath}`} alt="" />
            <figcaption>
                <h3 className='font-bold'>{props.title}</h3>
                <h4>{props.releaseDate}</h4>
                <button onClick={addToWatchListHandler} className='underline hover:cursor-pointer'>Add to WatchList</button>
            </figcaption>
        </figure>
    )
}

export default Movie
