import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopularMovies } from '../features/movies/moviesSlice';
import { changeToNextPage, changeToPrevPage } from '../features/movies/moviesSlice';

const HomePage = () => {

    const { data, error, isLoading, pageNo } = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies(pageNo));
    }, [pageNo]);

    return (
        <section>
            <h1 className='text-3xl w-[70vw] mx-auto my-10'>Popular Movies</h1>
            {isLoading && <p className='text-center'>Loading...</p>}
            {error && <p className='text-red-500 text-center'>{ error }</p>}
            <section className='w-[70vw] mx-auto flex flex-wrap gap-5'>
                {
                    data && data.results && data.results.map((movie) => {
                        return <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            posterPath={movie.poster_path}
                            releaseDate={movie.release_date}
                            rating={movie.vote_average}
                            genreId = {movie.genre_ids[0]}
                        />
                    })
                }
            </section>
            <section className='flex justify-center my-5 gap-10'>
                <button onClick={()=> dispatch(changeToPrevPage())} className='border rounded-md px-8 py-1 hover:cursor-pointer'>Prev</button>
                Page {pageNo}
                <button onClick={()=> dispatch(changeToNextPage())} className='border rounded-md px-8 py-1 hover:cursor-pointer'>Next</button>
            </section>
        </section>
    )
}

export default HomePage
