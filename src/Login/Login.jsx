import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useToken from '../hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user);

    let errorMessage;

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (loading) {
        return <div className='text-center'><button className="btn loading mt-20">loading</button></div>;
    }
    if (error) {
        errorMessage = <p className='text-secondary'>{error.message}</p>
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='my-10 min-h-screen'>
            <h1 className='text-primary text-center text-2xl font-bold my-10'>Login</h1>
            <form onSubmit={handleSubmit} className='w-1/2 border-2 rounded-lg mx-auto my-auto bg-primary flex flex-col gap-4 px-16 py-16'>
                <input name='email' type="email" placeholder="Your email" className="input w-full" required />
                <input name='password' type="password" placeholder="Password" className="input w-full" required />
                {errorMessage}
                <div className='w-full'>
                    <button className="btn btn-active btn-secondary mt-10 w-1/4" type='submit'>Login</button>
                    <p className='mt-4 text-white text-md'>New to e-commarce Admin? <Link className='text-secondary' to='/signup'>create new account</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;