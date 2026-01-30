import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const Product = () => {

    const {data, error, isLoading, sendRequest} = useFetch('https://fakestoreapi.com/products/1')

    useEffect(() => {
        sendRequest();
    }, [])

    return (
        <div>
            <h2>Product Details</h2>
            {isLoading && <p> Loading ....</p>}
            {data && <h4>Title : {data.title}</h4>}
            {error && <p>{ error }</p>}
        </div>
    )
}

export default Product
