import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNo}`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2E2MDBiMTIxNWIwMmRkYjk2YjdjMzE2NzFjNTNhZSIsIm5iZiI6MTc2NzcyMTEzMC45NCwic3ViIjoiNjk1ZDQ4YWE3MmQwMzAxZjhkNjRjMWVhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RPN6Z0N8sqOi3Pu06JJUas6Ta74k5wXbmKoUaHhjgdw'
            }
        })
            .then((response) => {
                setMovies(() => response.data.results);
            })

    }, [pageNo]);


    const prevPageClickHandler = () => {
        if (pageNo <= 1) {
            return;
        }
        setPageNo((pageNo) => pageNo - 1);
    }

    const nextPageClickHandler = () => {
        if (pageNo >= 10000) {
            return;
        }
        setPageNo((pageNo) => pageNo + 1);
    }

    return (
        <section>
            <h1 className='text-2xl w-[70vw] mx-auto my-10'>Popular Movies</h1>
            <section className='w-[70vw] mx-auto flex flex-wrap gap-5'>

                {
                    movies.map((movie) => {
                        return <Movie
                            id={movie.id}
                            title={movie.title}
                            posterPath={movie.poster_path}
                            releaseDate={movie.release_date}
                        />
                    })
                }
            </section>
            <section className='flex justify-center my-5 gap-10'>
                <button onClick={prevPageClickHandler} className='border rounded-md px-8 py-1 hover:cursor-pointer'>Prev</button>
                <button onClick={nextPageClickHandler} className='border rounded-md px-8 py-1 hover:cursor-pointer'>Next</button>
            </section>
        </section>
    )
}

export default HomePage
