import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const Movies = () => {

    const { data, error, isLoading, sendRequest } = useFetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2E2MDBiMTIxNWIwMmRkYjk2YjdjMzE2NzFjNTNhZSIsIm5iZiI6MTc2NzcyMTEzMC45NCwic3ViIjoiNjk1ZDQ4YWE3MmQwMzAxZjhkNjRjMWVhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RPN6Z0N8sqOi3Pu06JJUas6Ta74k5wXbmKoUaHhjgdw'
        }
    );

    useEffect(() => {
        sendRequest();
    }, []);

    console.log(data);

    return (
        <div>
            <h2>Now Playing Movies</h2>
            <ul>
                {data && data.results
                    && data.results.map((movie) => {
                        return <li key={movie.id}>{ movie.title }</li>
                    })}
            </ul>

        </div>
    )
}

export default Movies
