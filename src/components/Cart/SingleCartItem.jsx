import React, { useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';

const SingleCartItem = ({ item, handleRemove, handleChange, handlePrice }) => {
    useEffect(() => {
        handlePrice()
    }, [item.quantity])
    return (
        <div className='flex justify-between px-10 items-center border-2 rounded bg-zinc-100 py-2'>
            <div className='w-1/5 p-2 flex items-center' style={{ height: '80px', width: '80px' }}><img src={item?.picture} alt="" /></div>
            <div className='w-1/5'>{item?.name}</div>
            <div className='flex gap-2 items-center'>
                <button onClick={() => handleChange(item, -1)} className="btn btn-sm bg-transparent btn-circle border-none">
                    <span className='text-zinc-400 text-2xl '><AiOutlineMinusCircle /></span>
                </button>
                <div className='border-2 border-zinc-300 py-1 px-6 rounded-sm'>{item.quantity}</div>
                <button onClick={() => handleChange(item, +1)} className="btn btn-sm bg-transparent btn-circle border-none float-right">
                    <span className='text-zinc-400 hover: text-2xl'><AiOutlinePlusCircle /></span>
                </button>
            </div>
            <div>$ {(item.balance * item.quantity).toFixed(2)}</div>
            <button onClick={() => handleRemove(item._id)} className="btn btn-sm bg-transparent btn-circle border-none ">
                <span className='text-red-500 text-2xl'><AiFillDelete /></span>
            </button>
        </div >
    );
};

export default SingleCartItem;