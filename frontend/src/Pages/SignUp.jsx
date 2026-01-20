import React from 'react';
import { Link } from 'react-router-dom';
import sideImage from '../assets/side-image.png';

const SignUp = () => {
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
                        Create an account
                    </h1>
                    <p className="text-[16px] leading-[24px] mb-[48px]">
                        Enter your details below
                    </p>

                    <form className="flex flex-col gap-lg">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border-b border-black/50 py-xs focus:outline-none focus:border-primary transition-colors text-[16px]"
                            />
                        </div>
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

                        <div className="flex flex-col gap-sm mt-md">
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-hover text-white py-sm rounded-[4px] font-medium transition-colors"
                            >
                                Create Account
                            </button>

                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-sm border border-black/40 py-sm rounded-[4px] hover:bg-gray-50 transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                                    <path d="M12.24 24.0008C15.4765 24.0008 18.2059 22.9227 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.51636V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853" />
                                    <path d="M5.50254 14.3003C5.25219 13.5545 5.11265 12.7599 5.11265 11.9408C5.11265 11.1218 5.25219 10.3271 5.50254 9.58133V6.49048H1.51636C0.665951 8.18841 0.179688 10.0104 0.179688 11.9408C0.179688 13.8713 0.665951 15.6932 1.51636 17.3912L5.50254 14.3003Z" fill="#FBBC05" />
                                    <path d="M12.24 4.74966C14.0074 4.74966 15.5951 5.35659 16.8407 6.54867L20.2735 3.11584C18.1968 1.17906 15.4674 0 12.24 0C7.7029 0 3.55371 2.55743 1.51636 6.60959L5.50705 9.70044C6.45946 6.86088 9.11388 4.74966 12.24 4.74966Z" fill="#EA4335" />
                                </svg>
                                <span>Sign up with Google</span>
                            </button>
                        </div>
                    </form>

                    <div className="mt-lg text-center flex items-center justify-center gap-sm">
                        <span className="text-black/70">Already have account?</span>
                        <Link to="/login" className="font-medium border-b border-black/50 hover:text-primary hover:border-primary transition-colors">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
