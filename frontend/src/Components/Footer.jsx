import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-6">
            <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-5 gap-15 max-lg:grid-cols-3 max-lg:gap-10 max-md:grid-cols-2 max-md:gap-8 max-sm:grid-cols-1">
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold m-0 mb-4">Exclusive</h3>
                    <p className="text-xl font-medium m-0">Subscribe</p>
                    <p className="text-sm text-gray-50 m-0">Get 10% off your first order</p>
                    <div className="relative flex items-center border-[1.5px] border-white rounded py-3 px-4 mt-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder:text-white/50"
                        />
                        <button className="bg-transparent border-none cursor-pointer p-0 flex items-center text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-medium m-0 mb-4">Support</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                        <li className="text-sm text-gray-50 leading-[1.8]">111 Bijoy sarani, Dhaka,</li>
                        <li className="text-sm text-gray-50 leading-[1.8]">DH 1515, Bangladesh.</li>
                        <li className="text-sm text-gray-50 leading-[1.8]">exclusive@gmail.com</li>
                        <li className="text-sm text-gray-50 leading-[1.8]">+88015-88888-9999</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-medium m-0 mb-4">Account</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                        <li><a href="/account" className="text-sm text-gray-50 no-underline transition-colors hover:text-primary">My Account</a></li>
                        <li><a href="/login" className="text-sm text-gray-50 no-underline transition-colors hover:text-primary">Login / Register</a></li>
                        <li><a href="/cart" className="text-sm text-gray-50 no-underline transition-colors hover:text-primary">Cart</a></li>
                        <li><a href="/wishlist" className="text-sm text-gray-50 no-underline transition-colors hover:text-primary">Wishlist</a></li>
                        <li><a href="/shop" className="text-sm text-gray-50 no-underline transition-colors hover:text-primary">Shop</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-medium m-0 mb-4">Quick Link</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                        <li><a href="/privacy-policy" className="text-sm text-gray-50 no-underline transition-colors hover:text-primary">Privacy Policy</a></li>
                        <li><a href="/terms" className="text-sm text-gray-50 no-underline transition-colors hover:text-primary">Terms Of Use</a></li>
                        <li><a href="/faq" className="text-sm text-gray-50 no-underline transition-colors hover:text-primary">FAQ</a></li>
                        <li><a href="/contact" className="text-sm text-gray-50 no-underline transition-colors hover:text-primary">Contact</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-medium m-0 mb-4">Download App</h4>
                    <p className="text-xs text-gray-50 mb-2">Save $3 with App New User Only</p>
                    <div className="flex gap-2 mb-4">
                        <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
                            <div className="text-[10px] text-black">QR Code</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col py-1 px-2 border border-white rounded cursor-pointer transition-all hover:bg-white/10">
                                <span className="text-[9px] text-gray-50">GET IT ON</span>
                                <span className="text-[13px] font-semibold">Google Play</span>
                            </div>
                            <div className="flex flex-col py-1 px-2 border border-white rounded cursor-pointer transition-all hover:bg-white/10">
                                <span className="text-[9px] text-gray-50">Download on the</span>
                                <span className="text-[13px] font-semibold">App Store</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" className="text-white transition-all hover:text-primary hover:-translate-y-0.5 cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com" className="text-white transition-all hover:text-primary hover:-translate-y-0.5 cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </a>
                        <a href="https://instagram.com" className="text-white transition-all hover:text-primary hover:-translate-y-0.5 cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="#000"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#000"></line>
                            </svg>
                        </a>
                        <a href="https://linkedin.com" className="text-white transition-all hover:text-primary hover:-translate-y-0.5 cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/20 mt-15 pt-4 px-10 text-center">
                <p className="text-sm text-white/50 m-0">&copy; Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
