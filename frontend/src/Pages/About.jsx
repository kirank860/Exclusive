import React from 'react';
import Services from '../Components/Services';
import { Twitter, Instagram, Linkedin, Store, DollarSign, Briefcase, ShoppingBag } from 'lucide-react';
import productsData from '../data/productsData.json';

const About = () => {
    const stats = [
        { id: 1, icon: <Store size={40} />, count: '10.5k', label: 'Sellers active our site', active: false },
        { id: 2, icon: <DollarSign size={40} />, count: '33k', label: 'Monthly Product Sale', active: true },
        { id: 3, icon: <Briefcase size={40} />, count: '45.5k', label: 'Customer active in our site', active: false },
        { id: 4, icon: <ShoppingBag size={40} />, count: '25k', label: 'Anual gross sale in our site', active: false },
    ];

    const team = [
        {
            id: 1,
            name: 'Tom Cruise',
            role: 'Founder & Chairman',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
            social: { twitter: '#', instagram: '#', linkedin: '#' }
        },
        {
            id: 2,
            name: 'Emma Watson',
            role: 'Managing Director',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
            social: { twitter: '#', instagram: '#', linkedin: '#' }
        },
        {
            id: 3,
            name: 'Will Smith',
            role: 'Product Designer',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
            social: { twitter: '#', instagram: '#', linkedin: '#' }
        }
    ];

    return (
        <div className="min-h-screen bg-white">

            <div className="max-w-[1200px] mx-auto px-10 py-20">
                {/* Breadcrumbs */}
                <div className="flex gap-3 text-sm mb-20">
                    <span className="text-gray-500">Home</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-black font-medium">About</span>
                </div>

                {/* Our Story Section */}
                <div className="flex items-center gap-20 mb-36 max-lg:flex-col max-lg:gap-10">
                    <div className="flex-1">
                        <h1 className="text-[54px] font-semibold mb-10 max-md:text-[36px]">Our Story</h1>
                        <div className="space-y-6 text-base leading-relaxed">
                            <p>
                                Launced in 2015, Exclusive is South Asia's premier online shopping
                                maketplace with an active presense in Bangladesh. Supported
                                by wide range of tailored marketing, data and service solutions,
                                Exclusive has 10,500 sellers and 300 brands and serves 3
                                millions customers across the region.
                            </p>
                            <p>
                                Exclusive has more than 1 Million products to offer, growing at a
                                very fast. Exclusive offers a diverse assotment in categories
                                ranging from consumer.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
                            alt="Our Story"
                            className="w-full rounded h-[600px] object-cover max-lg:h-[400px]"
                        />
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-4 gap-[30px] mb-36 max-lg:grid-cols-2 max-sm:grid-cols-1">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className={`flex flex-col items-center justify-center p-8 border rounded transition-all duration-300 ${stat.active
                                ? 'bg-primary text-white border-primary shadow-lg'
                                : 'bg-white text-black border-gray-200 hover:border-primary'
                                }`}
                        >
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${stat.active ? 'bg-white/30' : 'bg-gray-200'
                                }`}>
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${stat.active ? 'bg-white text-primary' : 'bg-black text-white'
                                    }`}>
                                    {stat.icon}
                                </div>
                            </div>
                            <h2 className="text-[32px] font-bold mb-3">{stat.count}</h2>
                            <p className="text-base text-center">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Team Section */}
                <div className="mb-36">
                    <div className="grid grid-cols-3 gap-[30px] max-lg:grid-cols-2 max-sm:grid-cols-1">
                        {team.map((member) => (
                            <div key={member.id} className="group">
                                <div className="bg-gray-100 rounded mb-8 overflow-hidden h-[430px]">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-contain pt-10 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-[32px] font-medium mb-2">{member.name}</h3>
                                <p className="text-base text-gray-600 mb-4">{member.role}</p>
                                <div className="flex gap-4">
                                    <a href={member.social.twitter} className="text-black hover:text-primary transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                    <a href={member.social.instagram} className="text-black hover:text-primary transition-colors">
                                        <Instagram size={20} />
                                    </a>
                                    <a href={member.social.linkedin} className="text-black hover:text-primary transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination Dots (Placeholder for Carousel behavior) */}
                    <div className="flex justify-center gap-3 mt-10">
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                        <div className="w-3 h-3 rounded-full bg-primary border-[3px] border-gray-300"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    </div>
                </div>

                {/* Services Section */}
                <Services services={productsData.services} />
            </div>
        </div>
    );
};

export default About;
