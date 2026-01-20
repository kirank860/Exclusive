import React from 'react';

const Services = ({ services = [] }) => {
    return (
        <div className="py-40 bg-luxury-cream/10">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 px-6 md:px-12">
                {services && services.map((service) => (
                    <div key={service.id} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full border border-luxury-gold/20 flex items-center justify-center mb-8 transition-all duration-700 group-hover:bg-luxury-gold group-hover:border-luxury-gold">
                            <div className="text-3xl filter grayscale group-hover:grayscale-0 group-hover:invert-0 transition-all duration-700">
                                {service.icon}
                            </div>
                        </div>
                        <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-luxury-black mb-4">
                            {service.title}
                        </h3>
                        <p className="text-[11px] uppercase tracking-widest text-gray-400 m-0 leading-loose max-w-[250px]">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Services;
