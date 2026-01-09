import React, { useState } from 'react'
import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';

const App = () => {

    const [page, setPage] = useState('login');

    const arr = [1, 2, 3];

    // imperative way
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }

    // Declarative way
    for (let num of arr) {
        console.log(num);
    }

    return (
        <div>
            <h1>React Router Demo</h1>
            <button onClick={()=> setPage('login')}>Login</button>
            <button onClick={()=> setPage('products')}>Products</button>
            <button onClick={() => setPage('cart')}>Cart</button>
            

            {page==='login' && <Login/>}
            {page==='products' && <Products/>}
            {page==='cart' && <Cart/>}
        </div>
    )
}

export default App
