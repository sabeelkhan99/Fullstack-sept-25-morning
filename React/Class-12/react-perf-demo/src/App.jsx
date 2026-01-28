import React, { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router';

const App = () => {

    const HomePage = lazy(() => import('./pages/Home'));
    const AboutPage = lazy(() => import('./pages/About'));
    const ProductsPage = lazy(() => import('./pages/Product'));

    return (
        <div>
            <h1>React Performance Demo</h1>
            <nav>
                <ul>
                    <li><Link  to="/">Home</Link></li>
                    <li><Link  to="/about">About</Link></li>
                    <li><Link  to="/products">Product</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={
                    <Suspense fallback={<p>Loading...</p>}>
                        <HomePage/>
                    </Suspense>
                } />
                <Route path='/about' element={
                    <Suspense fallback={ <p>Loading...</p> }>
                        <AboutPage/>
                    </Suspense>
                } />
                <Route path='/products' element={
                    <Suspense fallback={ <p>Loading...</p> }>
                        <ProductsPage/>
                    </Suspense>
                } />
            </Routes>
        </div>
    )
}

export default App
