import React from 'react';
import medical1 from '../../assets/medical1.jpg'

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row  justify-between w-3/4 mx-auto items-center gap-4 my-10'>
            <div className='text-gray-800 w-1/2 text-6xl font-bold'>
                <h1>Here, we are giving you the best <span className='text-secondary text-5xl'>Medical Equipments</span>.</h1>
            </div>
            <div className="card lg:card-side w-1/2 bg-violet-600 p-6 shadow-xl">
                <figure><img className='rounded-lg ml-5' src={medical1} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">E-COMMERCE ADMIN</h2>
                    <p className='text-white'>Click the button to contact with us.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary">Contact</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;