import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

async function fetchProduct() {
    const response = await fetch('https://fakestoreapi.com/prod/1');
    const data = await response.json();
    return data;
}

const Demo = () => {

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function makeApiCall() {
            try {
                const product = await fetchProduct();
                setProduct(product);
                setIsLoading(false);
            }
            catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }
        makeApiCall()
    }, []);

    return (
        <div>
            <h1>useReducer Demo</h1>
            {isLoading && <p>Loading a Product......</p>}
            {error && <p>{ error }</p>}
            {product && <figure>
                <figcaption>
                    <h3>{product.title}</h3>
                </figcaption>
            </figure>}
        </div>
    )
}

export default Demo
