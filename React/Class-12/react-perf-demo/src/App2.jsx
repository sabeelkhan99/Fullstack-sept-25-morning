import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router';

const App2 = () => {

    const [HomePage, setHomePage] = useState(null);
    const [AboutPage, setAboutPage] = useState(null);
    const [ProductsPage, setProductsPage] = useState(null);

    useEffect(() => {
        import('./pages/Home').then((module)=> setHomePage(()=> module.default))
    }, []);

    const loadAboutPage = () => {
        import('./pages/About').then((module) => setAboutPage(() => module.default));
    }

    const loadProductsPage = () => {
        import('./pages/Product').then((module) => setProductsPage(() => module.default));
    }

    const loadHomePage = () => {
        import('./pages/Home').then((module) => setHomePage(() => module.default));
    }

    return (
        <div>
            <h1>React Performance Demo</h1>
            <nav>
                <ul>
                    <li><Link onClick={loadHomePage} to="/">Home</Link></li>
                    <li><Link onClick={loadAboutPage} to="/about">About</Link></li>
                    <li><Link onClick={loadProductsPage} to="/products">Product</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={HomePage ? <HomePage/> : <p>Loading home page...</p> } />
                <Route path='/about' element={AboutPage ? <AboutPage/>: <p>Loading about page...</p> } />
                <Route path='/products' element={ProductsPage ? <ProductsPage/>: <p>Loading product page..</p> } />
            </Routes>
        </div>
    )
}

export default App2
