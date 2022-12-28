import React, { useContext, useEffect, useReducer, useState } from 'react';
import { ProductContext } from '../../App';
import SingleCartItem from './SingleCartItem';

const Cart = ({ cartItems, setCartItems, handleChange }) => {
    // const products = useContext(ProductContext);
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cartItems.filter(item => item._id !== id);
        setCartItems(arr);
        // handlePrice();
    }
    const handlePrice = () => {
        let total = 0;
        cartItems.map(item => total += item.balance * item.quantity);
        setPrice(total.toFixed(2));
    }

    useEffect(() => {
        handlePrice();
    }, [cartItems.length]);
    return (
        <div className='mb-24'>
            <h1 className='text-center text-3xl text-primary font-bold my-2'>Your cart</h1>
            {cartItems.length > 0 ?
                <div className='w-2/3 overflow-hidden mx-auto border-2 p-5 rounded-sm flex flex-col gap-2'>
                    {
                        cartItems?.map(item => <SingleCartItem
                            key={item._id}
                            item={item}
                            handleRemove={handleRemove}
                            handleChange={handleChange}
                        ></SingleCartItem>)
                    }

                </div> :
                <h1 className='text-center text-2xl font-semibold'>Your cart is empty</h1>
            }
            {price > 0 &&
                <div className='w-2/3 mx-auto my-4 text-2xl font-semibold'><h1 className='text-right'>Price: $ {price}</h1></div>}

        </div>
    );
};

export default Cart;