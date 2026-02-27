import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'antd'
import Movie from '../components/Movie'

const AllMovies = () => {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        ;(async () => {
            const res = await axios.get('http://localhost:8080/movies')
            setMovies(res.data?.payload)
        })()
    }, [])

    return (
        <div style={{ padding: '16px 8px', maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ marginBottom: 16, fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>
                Movies in Theatres
            </h2>
            <Row gutter={[12, 16]}>
                {movies &&
                    movies.map((movie) => (
                        <Col key={movie._id} xs={12} sm={12} md={8} lg={6}>
                            <Movie movie={movie} />
                        </Col>
                    ))}
            </Row>
        </div>
    )
}

export default AllMovies
