import React from 'react'
import Layout from './components/Layout';
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage';
import WatchList from './pages/WatchList';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/watchlist' element={<WatchList/> } />
            </Routes>
        </Layout>
    )
}

export default App
