import React from 'react';
import { Link } from 'react-router-dom';
import sideImage from '../assets/side-image.png';

const Login = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen pt-15 md:pt-xl pb-xl">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 bg-[#CBE4E8] flex items-center justify-center p-md md:p-0">
                <img
                    src={sideImage}
                    alt="Shopping Cart and Phone"
                    className="w-full h-auto max-w-[700px] object-contain"
                />
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-md md:pl-[120px] md:pr-[120px]">
                <div className="w-full max-w-[370px]">
                    <h1 className="text-[36px] font-medium leading-[48px] tracking-[4%] mb-md">
                        Log in to Exclusive
                    </h1>
                    <p className="text-[16px] leading-[24px] mb-[48px]">
                        Enter your details below
                    </p>

                    <form className="flex flex-col gap-lg">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Email or Phone Number"
                                className="w-full border-b border-black/50 py-xs focus:outline-none focus:border-primary transition-colors text-[16px]"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full border-b border-black/50 py-xs focus:outline-none focus:border-primary transition-colors text-[16px]"
                            />
                        </div>

                        <div className="flex items-center justify-between mt-md">
                            <button
                                type="submit"
                                className="bg-primary hover:bg-primary-hover text-white px-[48px] py-sm rounded-[4px] font-medium transition-colors"
                            >
                                Log In
                            </button>

                            <Link
                                to="#"
                                className="text-primary hover:text-primary-hover transition-colors"
                            >
                                Forget Password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
