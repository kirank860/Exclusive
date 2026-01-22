import React, { useRef, useState, useEffect } from 'react';
import HeroBanner from '../Components/HeroBanner';
import ProductCard from '../Components/ProductCard';
import CountdownTimer from '../Components/CountdownTimer';
import SectionHeader from '../Components/SectionHeader';
import CategoryCard from '../Components/CategoryCard';
import Services from '../Components/Services';
import Products from '../Components/Products';
import productsData from '../data/productsData.json';


const Home = () => {
    const productsScrollRef = useRef(null);
    const [flashSales, setFlashSales] = useState([]);
    const [bestSelling, setBestSelling] = useState([]);

    useEffect(() => {
        const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";

        // Fetch Flash Sales
        fetch(`${API_BASE_URL}/api/products?category=Flash Sales`)
            .then(res => res.json())
            .then(data => setFlashSales(data))
            .catch(err => console.error("Error fetching Flash Sales:", err));

        // Fetch Best Selling
        fetch(`${API_BASE_URL}/api/products?category=Best Selling`)
            .then(res => res.json())
            .then(data => setBestSelling(data))
            .catch(err => console.error("Error fetching Best Selling:", err));
    }, []);


    const scrollProducts = (direction) => {
        if (productsScrollRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            productsScrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="flex flex-col gap-0">
                {/* Hero Section - Full Width Minimalist */}
                <section className="relative h-[80vh] min-h-[600px] flex overflow-hidden">
                    <HeroBanner banners={productsData.heroBanners} />
                </section>


                {/* Main Content Area */}
                <main className="max-w-[1400px] mx-auto w-full">

                    {/* Flash Sales Section - Curated Carousel */}
                    <section className="py-24 md:py-40">
                        <div className="px-6 md:px-12">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
                                <SectionHeader
                                    label="Limited Edition"
                                    title="Private Sale"
                                    showTimer={true}
                                    timer={<CountdownTimer />}
                                />
                                <div className="flex gap-6 self-end md:self-auto mb-1">
                                    <button
                                        onClick={() => scrollProducts('left')}
                                        className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center cursor-pointer transition-all duration-500 hover:border-luxury-gold group"
                                    >
                                        <svg className="group-hover:text-luxury-gold transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                            <polyline points="15 18 9 12 15 6"></polyline>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => scrollProducts('right')}
                                        className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center cursor-pointer transition-all duration-500 hover:border-luxury-gold group"
                                    >
                                        <svg className="group-hover:text-luxury-gold transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div
                                ref={productsScrollRef}
                                className="flex gap-10 overflow-x-auto scroll-smooth pb-10 scrollbar-none snap-x"
                            >
                                {flashSales.length > 0 ? (
                                    flashSales.map((product) => (
                                        <div key={product._id} className="snap-start">
                                            <ProductCard product={product} showDiscount={true} />
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-luxury-black/30 font-serif italic py-10">Preparing live offers...</div>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* High-End Category Grid */}
                    <section className="py-24 md:py-40 bg-luxury-cream/30">
                        <div className="px-6 md:px-12">
                            <SectionHeader
                                label="Browse"
                                title="Categories"
                            />
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {productsData.categories.map((category) => (
                                    <CategoryCard key={category.id} category={category} isActive={category.active} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Best Selling Products - Minimal Grid */}
                    <section className="py-24 md:py-40">
                        <div className="px-6 md:px-12">
                            <SectionHeader
                                label="Essentials"
                                title="Boutique Favourites"
                                showViewAll={true}
                                onViewAll={() => console.log('View All')}
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                                {bestSelling.length > 0 ? (
                                    bestSelling.map((product) => (
                                        <ProductCard key={product._id} product={product} />
                                    ))
                                ) : (
                                    <div className="col-span-full text-luxury-black/30 font-serif italic py-10">Curating collection...</div>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Featured Immersive Banner */}
                    <section className="py-24 md:py-40 bg-luxury-black overflow-hidden relative">
                        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center relative z-10 gap-20">
                            <div className="flex-1 text-center lg:text-left animate-in fade-in duration-1000">
                                <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] font-bold mb-10 block">
                                    Auditory Excellence
                                </span>
                                <h2 className="text-white text-5xl md:text-8xl font-serif leading-[1.1] mb-12 italic">
                                    Redefining the <span className="not-italic font-normal">Sound</span> of Silence
                                </h2>
                                <button className="bg-luxury-gold text-luxury-black py-5 px-16 text-xs uppercase tracking-widest font-bold hover:bg-white transition-all duration-500 hover:-translate-y-1">
                                    Experience Now
                                </button>
                            </div>
                            <div className="flex-1 flex justify-center items-center relative group">
                                <div className="absolute inset-0 bg-luxury-gold/10 rounded-full blur-[120px] scale-150 animate-pulse" />
                                <img
                                    src="/Users/kirank/.gemini/antigravity/brain/658b93d9-2f6d-4fd8-8a9f-a46f096960aa/luxury_headphones_banner_1768901938640.png"
                                    alt="Luxury Audio"
                                    className="relative z-10 w-full max-w-[600px] h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Explore Products Grid - NOW LIVE FROM BACKEND */}
                    <section className="py-24 md:py-40">
                        <div className="px-6 md:px-12">
                            <SectionHeader
                                label="Catalogue"
                                title="Explore Our Pieces"
                            />
                            <Products />
                            <div className="flex justify-center mt-24">
                                <button className="border border-luxury-black text-luxury-black py-4 px-16 text-xs uppercase tracking-[0.2em] font-bold hover:bg-luxury-black hover:text-white transition-all duration-500">
                                    View Full Catalogue
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* New Arrival - Luxury Layout */}
                    <section className="py-24 md:py-40 bg-luxury-cream/10">
                        <div className="px-6 md:px-12">
                            <SectionHeader
                                label="Exclusives"
                                title="New Arrivals"
                            />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-auto lg:h-[800px]">
                                <div className="relative overflow-hidden bg-luxury-black flex items-end group">
                                    <img
                                        src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1000"
                                        alt="Masterpiece"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 grayscale hover:grayscale-0"
                                    />
                                    <div className="relative z-10 p-12 text-white">
                                        <h3 className="text-3xl font-serif mb-6">The Masterpiece</h3>
                                        <p className="text-sm font-light mb-8 opacity-70 leading-relaxed uppercase tracking-widest">
                                            Limited Series Production
                                        </p>
                                        <a
                                            href="/products/masterpiece"
                                            className="text-luxury-gold text-xs uppercase tracking-widest font-bold border-b border-luxury-gold/30 pb-1 hover:border-luxury-gold transition-all"
                                        >
                                            Inquire Now
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10">
                                    <div className="flex-1 relative overflow-hidden bg-luxury-black flex items-end group min-h-[350px]">
                                        <img
                                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
                                            alt="Elegance"
                                            className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-90"
                                        />
                                        <div className="relative z-10 p-10 text-white">
                                            <h3 className="text-2xl font-serif mb-4 italic">Elegance Defined</h3>
                                            <a
                                                href="/collections/elegant"
                                                className="text-white text-[10px] uppercase tracking-[0.3em] font-bold border-b border-white/30 pb-1 hover:border-luxury-gold hover:text-luxury-gold transition-all"
                                            >
                                                Shop Collection
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1">
                                        <div className="relative overflow-hidden bg-luxury-black flex items-end group min-h-[300px]">
                                            <img
                                                src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600"
                                                alt="Craft"
                                                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-1000 group-hover:scale-110"
                                            />
                                            <div className="relative z-10 p-8 text-white">
                                                <h3 className="text-xl font-serif mb-4">The Craft</h3>
                                                <a href="/products/craft" className="text-[10px] uppercase font-bold tracking-widest">Explore</a>
                                            </div>
                                        </div>
                                        <div className="relative overflow-hidden bg-luxury-black flex items-end group min-h-[300px]">
                                            <img
                                                src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=600"
                                                alt="Essence"
                                                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-1000 group-hover:scale-110"
                                            />
                                            <div className="relative z-10 p-8 text-white">
                                                <h3 className="text-xl font-serif mb-4">The Essence</h3>
                                                <a href="/products/essence" className="text-[10px] uppercase font-bold tracking-widest">Discover</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Services Section */}
                <Services services={productsData.services} />
            </div>
        </div>
    );
};

export default Home;
