import React from 'react'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router'
import AllMovies from './pages/AllMovies'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import MovieDetails from './pages/MovieDetails'
import CreateTheatre from './pages/CreateTheatre'
import AllTheatres from './pages/AllTheatres'

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<AllMovies />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/theatres" element={<AllTheatres />} />
                <Route path="/theatres/new" element={<CreateTheatre />} />
            </Routes>
        </Layout>
    )
}

export default App
