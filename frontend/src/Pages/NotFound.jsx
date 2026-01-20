import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white">

            <div className="max-w-[1200px] mx-auto px-10 py-20">
                {/* Breadcrumbs */}
                <div className="flex gap-3 text-sm mb-36">
                    <span className="text-gray-500">Home</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-black font-medium">404 Error</span>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-[110px] font-medium m-0 leading-none mb-10 max-md:text-[60px]">404 Not Found</h1>
                    <p className="text-base text-black mb-20">Your visited page not found. You may go home page.</p>
                    <Link
                        to="/"
                        className="bg-primary text-white no-underline py-4 px-12 rounded text-base font-medium cursor-pointer transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(219,68,68,0.3)]"
                    >
                        Back to home page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
