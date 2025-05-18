import logo from '../assets/images/logo.png';
import { Form, Link, useNavigation } from 'react-router-dom';
import { useState } from 'react';
import { FormInput, SubmitBtn } from '../components';
import { FcGoogle } from "react-icons/fc";


const Signin = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    const [password, setPassword] = useState('');

    const isFormValid = email.trim() !== '' && password.trim() !== '';
    const isSubmitting = navigation.state === 'submitting';

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left container */}
            <div className='w-[610px] relative bg-white flex flex-col p-6 sm:px-8 md:px-12'>
                <div>
                    <img 
                    src={logo}
                    alt="Company logo"
                    className="w-[150px] h-[58px]"
                />
                </div>

                <div className="max-w-md w-full relative mx-0 sm:mx-5 mt-6 sm:left-5">
                <h1 className='font-bold font-inter text-4xl mb-1'>Signin</h1>
                <h2 className='font-bold font-inter mt-2'>Welcome back!</h2>
                <p className="mt-2 font-inter">Log in to manage your services, deals, and technical opportunities</p>

                <div className='mt-1'>
                        <span className='text-gray-500 font-inter'>Don't have an account? </span>
                        <Link to='/signup'>
                        <span className='font-semibold underline font-inter'>Create now</span>
                        </Link>
                    </div>
                </div>

                <Form method='post' className="mt-8 space-y-5 sm:mx-10 mx-0">
                    <FormInput 
                    type='email' 
                    label='E-mail' 
                    name='email' 
                    placeholder="example@gmail.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-bgInput"
                    labelClassName="text-base text-[#718096] mb-1 block"
                    />

                    <FormInput 
                    type='password' 
                    label='Password' 
                    name='password' 
                    placeholder="@#*%" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-bgInput"
                    labelClassName="text-base text-[#718096] mb-1 block"
                    />

                    <SubmitBtn text='Sign in' disabled={!isFormValid || isSubmitting} />

                    <p className="text-sm text-right mt-2">
                    <Link className="underline hover:text-black" to="/forgot-password">
                        Forgot Password?
                    </Link>
                    </p>

                    <div className="mt-8">
                    <div className="flex items-center gap-4">
                        <div className="flex-grow h-px bg-gray-300" />
                        <p className="text-sm font-semibold text-gray-500">OR</p>
                        <div className="flex-grow h-px bg-gray-300" />
                    </div>

                    <Link 
                        className="mt-5 h-10 border border-gray-300 bg-white 
                        hover:bg-gray-100 rounded-full flex items-center justify-center 
                        relative w-full"
                    >
                        <span className="absolute left-4">
                        <FcGoogle className="text-2xl" />
                        </span>
                        <span className="text-[16px] text-black font-medium text-center">
                        Continue with Google
                        </span>
                    </Link>
                    </div>
                </Form>
                
            </div>

        {/* Right container */}
        <div className='bg-teal-600'>Right</div>

        
        </section>
    );
};

export default Signin;
