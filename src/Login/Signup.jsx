import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../hooks/useToken';

const Signup = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user);

    let errorMessage;

    if (loading) {
        return <div className='text-center'><button className="btn loading mt-20">loading</button></div>;
    }
    if (error) {
        errorMessage = <p className='text-secondary'>{error.message}</p>
    }
    if (token) {
        navigate('/')
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const phoneNumber = event.target.tel.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='my-10 min-h-screen'>
            <h1 className='text-primary text-center text-2xl font-bold my-10'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='w-1/2 border-2 rounded-lg mx-auto my-auto bg-primary flex flex-col gap-4 px-16 py-16'>
                <input name='email' type="email" placeholder="abc@example.com" className="input w-full" required />
                <input name='tel' type="tel" placeholder="01800-123456" className="input w-full" pattern="[0-9]{5}-[0-9]{6}" required />
                <input name='password' type="password" placeholder="Password" className="input w-full" required />
                {errorMessage}
                <div className='w-full'>
                    <button className="btn btn-active btn-secondary mt-10 w-1/4" type='submit'>Sign Up</button>
                    <p className='mt-4 text-white text-md'>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Signup;