import React from 'react';
import { Link, Route, Routes } from 'react-router';

// static imports, they will load all the components before hand.
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

const App1 = () => {
    return (
        <div>
            <h1>React Performance Demo</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Product</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home/> } />
                <Route path='/about' element={<About/> } />
                <Route path='/products' element={<Product/> } />
            </Routes>
        </div>
    )
}

export default App1
