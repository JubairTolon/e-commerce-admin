import React from 'react';
import Banner from './Banner';
import Products from './Products';

const Home = ({ addToCart }) => {
    return (
        <>
            <Banner />
            <Products addToCart={addToCart} />
        </>
    );
};

export default Home;