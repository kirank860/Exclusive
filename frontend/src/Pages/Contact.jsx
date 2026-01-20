import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
    console.log('Contact Page Rendering');
    return (
        <div className="min-h-screen bg-white">

            <div className="max-w-[1200px] mx-auto px-10 py-20">
                {/* Breadcrumbs */}
                <div className="flex gap-3 text-sm mb-20">
                    <span className="text-gray-500">Home</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-black font-medium">Contact</span>
                </div>

                <div className="flex gap-[30px] max-lg:flex-col">
                    {/* Left Column: Contact Info */}
                    <div className="w-[340px] max-lg:w-full bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.05)] rounded p-10">
                        <div className="border-b border-gray-300 pb-8 mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                                    <Phone size={20} />
                                </div>
                                <h3 className="text-base font-medium">Call To Us</h3>
                            </div>
                            <div className="space-y-4 text-sm leading-relaxed">
                                <p>We are available 24/7, 7 days a week.</p>
                                <p>Phone: +880151112222</p>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                                    <Mail size={20} />
                                </div>
                                <h3 className="text-base font-medium">Write To Us</h3>
                            </div>
                            <div className="space-y-4 text-sm leading-relaxed">
                                <p>Fill out our form and we will contact you within 24 hours.</p>
                                <p>Emails: customer@exclusive.com</p>
                                <p>Emails: support@exclusive.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="flex-1 bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.05)] rounded p-10">
                        <form className="space-y-8">
                            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="bg-gray-100 border-none rounded p-4 text-sm outline-none focus:ring-1 focus:ring-primary"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email *"
                                    className="bg-gray-100 border-none rounded p-4 text-sm outline-none focus:ring-1 focus:ring-primary"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Your Phone *"
                                    className="bg-gray-100 border-none rounded p-4 text-sm outline-none focus:ring-1 focus:ring-primary"
                                    required
                                />
                            </div>
                            <textarea
                                placeholder="Your Message"
                                className="w-full bg-gray-100 border-none rounded p-4 text-sm outline-none focus:ring-1 focus:ring-primary h-[200px] resize-none"
                            ></textarea>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-primary text-white border-none py-4 px-12 rounded text-base font-medium cursor-pointer transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(219,68,68,0.3)]"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
