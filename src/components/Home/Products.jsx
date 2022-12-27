import React, { useEffect, useState } from 'react';
import Singleproduct from './Singleproduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='w-3/4 mx-auto mt-20'>
            <h1 className='text-primary text-4xl font-bold underline mb-10'>Our Products</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    products.map(product => <Singleproduct
                        key={product._id}
                        product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;