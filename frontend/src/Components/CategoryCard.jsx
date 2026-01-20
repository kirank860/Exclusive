import React from 'react';

const CategoryCard = ({ category, isActive = false }) => {
    return (
        <div className={`group flex flex-col items-center justify-center aspect-square rounded-full border border-gray-100 bg-white cursor-pointer transition-all duration-700 hover:border-luxury-gold hover:bg-luxury-cream/50 ${isActive ? 'border-luxury-gold bg-luxury-cream' : ''}`}>
            <div className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110">
                {category.icon}
            </div>
            <div className={`mt-4 text-[10px] uppercase tracking-widest font-medium transition-colors duration-700 ${isActive ? 'text-luxury-gold' : 'text-gray-400 group-hover:text-luxury-gold'}`}>
                {category.name}
            </div>
        </div>
    );
};


export default CategoryCard;
