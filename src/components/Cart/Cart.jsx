import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../App';
import SingleCartItem from './SingleCartItem';

const Cart = ({ cartItems, setCartItems, handleChange }) => {
    // const products = useContext(ProductContext);
    const [price, setPrice] = useState(0);

    //remove item from cart
    const handleRemove = (id) => {
        const arr = cartItems.filter(item => item._id !== id);
        setCartItems(arr);
    }

    //handle price
    const handlePrice = () => {
        let total = 0;
        cartItems.map((item) => (
            total += item.quantity * item.balance
        ))
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
                            handlePrice={handlePrice}
                        ></SingleCartItem>)
                    }

                </div> :
                <h1 className='text-center text-2xl font-semibold'>Your cart is empty</h1>
            }
            {price > 0 &&
                <div className='w-2/3 flex items-center justify-between mx-auto my-4 text-2xl font-semibold'>
                    <Link to='/checkout'>
                        <button className='btn btn-primary'>Checkout</button>
                    </Link>
                    <h1 className=''>Total: ${price}</h1>
                </div>
            }
        </div>
    );
};

export default Cart;