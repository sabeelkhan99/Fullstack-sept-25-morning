import React from 'react'
import Layout from './components/Layout';
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage';
import WatchListPage from './pages/WatchListPage';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/watchlist' element={<WatchListPage/> } />
            </Routes>
        </Layout>
    )
}

export default App
