import React from 'react';

const SectionHeader = ({ label, title, showTimer = false, timer, showViewAll = false, onViewAll }) => {
    return (
        <div className="flex flex-col gap-10 mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="flex items-center gap-6">
                <div className="w-10 h-[1px] bg-luxury-gold" />
                <span className="text-luxury-gold text-[10px] uppercase tracking-[0.4em] font-bold">
                    {label}
                </span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                <div className="flex flex-col md:flex-row items-baseline gap-10">
                    <h2 className="text-4xl md:text-6xl font-serif text-luxury-black m-0 tracking-tight">
                        {title}
                    </h2>
                    {showTimer && (
                        <div className="flex items-center gap-6">
                            <div className="hidden md:block w-10 h-[1px] bg-gray-200" />
                            {timer}
                        </div>
                    )}
                </div>

                {showViewAll && (
                    <button
                        onClick={onViewAll}
                        className="bg-transparent border-none text-luxury-black text-[10px] uppercase tracking-[0.3em] font-bold pb-2 border-b border-luxury-black/20 hover:border-luxury-black hover:text-luxury-gold transition-all duration-500 cursor-pointer"
                    >
                        Explore Collection
                    </button>
                )}
            </div>
        </div>
    );
};

export default SectionHeader;
