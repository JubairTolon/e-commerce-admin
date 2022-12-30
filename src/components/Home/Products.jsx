import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import Singleproduct from './Singleproduct';

const Products = ({ addToCart }) => {
    const products = useContext(ProductContext);

    return (
        <div className='w-3/4 mx-auto mt-20'>
            <h1 className='text-primary text-4xl font-bold underline mb-10'>Our Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <Singleproduct
                        key={product._id}
                        product={product}
                        addToCart={addToCart} />)
                }
            </div>
        </div>
    );
};

export default Products;