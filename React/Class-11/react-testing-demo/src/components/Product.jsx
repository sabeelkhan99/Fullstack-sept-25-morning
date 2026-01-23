import React, { useEffect, useState } from 'react'

const Product = () => {

    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, []);
    
    if (!product) {
        return <p>Loading...</p>
    }

  return (
    <div>
          <h1>Product Component</h1>
          <p>{ product.title }</p>
    </div>
  )
}

export default Product
