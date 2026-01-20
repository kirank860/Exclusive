import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming Link is from react-router-dom for navigation

const HeroBanner = ({ banners }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Using web-accessible luxury images for the production build
    const luxuryImages = [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&q=80", // Watch
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1600&q=80", // Perfume
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&q=80"  // Headphones
    ];

    useEffect(() => {
        if (!banners || banners.length === 0) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % banners.length);
        }, 8000); // Slower, more graceful transition
        return () => clearInterval(interval);
    }, [banners]);

    if (!banners || banners.length === 0) return null;


    return (
        <div className="relative overflow-hidden min-h-[500px] md:min-h-[700px] flex-1 bg-luxury-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={luxuryImages[currentSlide % luxuryImages.length]}
                    alt="Luxury Banner"
                    className="w-full h-full object-cover opacity-60 transition-all duration-1000 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/40 to-transparent" />
            </div>

            <div className="relative z-10 h-full flex items-center max-w-[1400px] mx-auto px-6 md:px-20 py-20">
                <div className="max-w-[600px] text-left animate-in fade-in slide-in-from-left-10 duration-1000">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-luxury-gold" />
                        <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] font-medium">Collection 2026</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.1] mb-10 italic">
                        {banners[currentSlide].title.split(' ').map((word, i) => (
                            <span key={i} className={i % 2 === 0 ? 'font-normal not-italic' : 'font-light italic'}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>

                    <p className="text-luxury-cream/60 text-lg md:text-xl font-light mb-12 max-w-[450px] leading-relaxed">
                        Discover the epitome of craftsmanship and timeless elegance in our latest curated selection.
                    </p>

                    <div className="flex items-center gap-10">
                        <Link
                            to={banners[currentSlide].link}
                            className="bg-luxury-gold text-luxury-black px-12 py-5 text-xs uppercase tracking-widest font-bold hover:bg-white transition-all duration-500 hover:-translate-y-1"
                        >
                            Explore Now
                        </Link>
                        <button className="text-white text-xs uppercase tracking-widest font-medium border-b border-white/30 pb-1 hover:border-luxury-gold transition-colors">
                            View Lookbook
                        </button>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 z-10 flex gap-4">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        className={`transition-all duration-500 rounded-full h-[2px] ${index === currentSlide ? 'bg-luxury-gold w-12' : 'bg-white/20 w-6 hover:bg-white/50'}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};


export default HeroBanner;
