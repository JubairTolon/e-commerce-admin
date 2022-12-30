import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-white">
                <h2 className='text-5xl text-primary ml-10 mt-5'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side w-4/12 lg:w-full bg-black">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><h1 className='mb-8 text-3xl text-secondary font-bold'>Admin Dashboard</h1></li>
                    <li className='text-white text-xl font-semibold hover:bg-secondary rounded-lg'><Link to='/dashboard'>Products</Link></li>
                    <li className='text-white text-xl font-semibold hover:bg-secondary rounded-lg'><Link to='/dashboard/users'>Users</Link></li>
                    <li className='text-white text-xl font-semibold hover:bg-secondary rounded-lg'><Link to='/dashboard/orders'>Orders</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default AdminDashboard;