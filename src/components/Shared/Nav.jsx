import { signOut } from '@firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Nav = ({ cartItems }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        navigate('/login');
        localStorage.removeItem('accessToken');
    };
    return (
        <div className="navbar bg-primary sticky top-0 z-10">
            <div className="flex-1">
                <Link to='/' className="btn btn-secondary normal-case text-2xl">e-commmerce Admin</Link>
            </div>
            <div>
                {user &&
                    <Link to='/dashboard'>
                        <button className='btn btn-outline text-white mx-6 hover:bg-secondary hover:border-secondary border-white'>Admin Dashboard</button>
                    </Link>}
            </div>
            <div className="flex-none gap-4">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-secondary btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{cartItems.length}</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-secondary shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg text-white">{cartItems.length} Items</span>
                            <div className="card-actions">
                                <Link to='/cart' className='btn btn-primary btn-block'>View cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-secondary btn-circle avatar">
                        <div className="indicator">
                            <span className='text-2xl'><BiUserCircle /></span>
                        </div>

                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary text-white font-bold rounded-box w-52">
                        {user ?
                            <li onClick={logout}><Link>Logout</Link></li> :
                            <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
                <div className='navbar-end'>
                    <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden text-white text-2xl hover:bg-secondary hover:border-secondary">
                        <span><AiOutlineMenuFold /></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Nav;