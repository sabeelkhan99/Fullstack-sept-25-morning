import React from 'react';
import { Routes, Route } from 'react-router'
import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';
import HomePage from './pages/HomePage';
import { Link, Navigate } from 'react-router';
import Subredit from './pages/Subredit';

const App = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/r/dogs">Dogs Subredit</Link></li>
                    <li><Link to="/r/cats">Cats Subredit</Link></li>
                    <li><Link to="/r/mangoes">Mangoes Subredit</Link></li>
                    <li><Link to="/r/oranges">Oranges Subredit</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/products' element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                
                {/* Dynamic Route */}
                <Route path="/r/:subredit" element={<Subredit />} />

                
                {/* Redirection Route */}
                <Route path='/abc' element={ <Navigate to="/"/> } />

                <Route path="*" element={<h1>404 Not Found - Oops! The page doesnt exists</h1>} />
            </Routes>
        </div>
    )
}

export default App


