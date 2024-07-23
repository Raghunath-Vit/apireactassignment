import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ApiAssign = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data);
                setProducts(response.data); 
            })
            .catch(error => {
                console.error( error);
            });
    }, []); 

    return (
        <>
        <h2 className='containerHeading'>Products</h2>
        <div className='container'>
            
            {products.map(product => (
                <div key={product.id} className='productCard'>
                    <div className='outerBox'>
                        <img src={product.image} alt="product-Image" className='productImage' />
                        <h3 className='productTitle'>{product.title.slice(0,20)}...</h3>
                        <p className='productCategory'>{product.category}</p>
                        <p className='productDescription'>{product.description.slice(0,25)}...</p>
                        <p className='productRating'>Rating: {product.rating.rate}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default ApiAssign;
