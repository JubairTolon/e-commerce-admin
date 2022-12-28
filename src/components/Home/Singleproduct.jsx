import React from 'react';

const Singleproduct = ({ product, addToCart }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className='h-48 bg-cover bg-center'><img className='' src={product.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <h2 className="card-title">Price: {product.balance}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button onClick={() => addToCart(product)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div >
    );
};

export default Singleproduct;