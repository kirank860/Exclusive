import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import SectionHeader from '../Components/SectionHeader';
import productsData from '../data/productsData.json';
import { Star, Heart, Truck, RotateCcw, Plus, Minus } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('white');
    const [mainImage, setMainImage] = useState("https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=800");

    // Finding current product or using a default one from flashSales
    const product = productsData.flashSales.find(p => p.id === parseInt(id)) || productsData.flashSales[0];

    const thumbnails = [
        "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=200",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200",
        "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=200"
    ];

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const colors = [
        { name: 'white', hex: '#FFFFFF' },
        { name: 'red', hex: '#DB4444' }
    ];

    return (
        <div className="min-h-screen bg-white">

            <div className="max-w-[1200px] mx-auto px-10 py-20">
                {/* Breadcrumbs */}
                <div className="flex gap-3 text-sm mb-20">
                    <span className="text-gray-500">Account</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-gray-500">Gaming</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-black font-medium">{product.name}</span>
                </div>

                {/* Main Product Section */}
                <div className="flex gap-[70px] mb-36 max-lg:flex-col">
                    {/* Left: Images */}
                    <div className="flex gap-7 flex-[1.2] max-md:flex-col-reverse">
                        <div className="flex flex-col gap-4 max-md:flex-row max-md:overflow-x-auto">
                            {thumbnails.map((thumb, index) => (
                                <div
                                    key={index}
                                    onClick={() => setMainImage(thumb.replace('w=200', 'w=800'))}
                                    className="w-[170px] h-[138px] bg-gray-100 rounded flex items-center justify-center cursor-pointer hover:border hover:border-black/20"
                                >
                                    <img src={thumb} alt={`thumb-${index}`} className="max-w-full max-h-full object-contain" />
                                </div>
                            ))}
                        </div>
                        <div className="flex-1 bg-gray-100 rounded flex items-center justify-center p-10 h-[600px]">
                            <img src={mainImage} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < 4 ? "#FFAD33" : "none"} stroke={i < 4 ? "#FFAD33" : "#D1D5DB"} />
                                ))}
                                <span className="text-sm text-gray-400 ml-2">({product.reviews} Reviews)</span>
                            </div>
                            <span className="text-gray-300">|</span>
                            <span className="text-sm text-[#00FF66]">In Stock</span>
                        </div>

                        <div className="text-2xl mb-6">${product.price.toFixed(2)}</div>

                        <p className="text-sm leading-relaxed mb-8 border-b border-gray-300 pb-8">
                            PlayStation 5 Controller Skin High quality vinyl with air
                            channel adhesive for easy bubble free install & mess
                            free removal Pressure sensitive.
                        </p>

                        {/* Options */}
                        <div className="space-y-6 mb-10">
                            {/* Colors */}
                            <div className="flex items-center gap-6">
                                <span className="text-xl">Colours:</span>
                                <div className="flex gap-2">
                                    {colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`w-5 h-5 rounded-full border-2 ${selectedColor === color.name ? 'border-black' : 'border-transparent'} p-0.5`}
                                        >
                                            <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }}></div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sizes */}
                            <div className="flex items-center gap-6">
                                <span className="text-xl">Size:</span>
                                <div className="flex gap-4">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-8 h-8 rounded border flex items-center justify-center text-sm font-medium transition-all ${selectedSize === size
                                                ? 'bg-primary text-white border-primary'
                                                : 'bg-white text-black border-gray-300 hover:border-primary'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity and Buy */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border border-gray-300 rounded h-11">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-full flex items-center justify-center border-r border-gray-300 hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <div className="w-20 h-full flex items-center justify-center font-bold text-xl">
                                        {quantity}
                                    </div>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-full flex items-center justify-center border-l border-gray-300 hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                                <button className="flex-1 bg-primary text-white h-11 rounded font-medium hover:bg-primary-hover transition-colors">
                                    Buy Now
                                </button>
                                <button className="w-11 h-11 border border-gray-300 rounded flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
                                    <Heart size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Delivery Info */}
                        <div className="border border-gray-300 rounded overflow-hidden">
                            <div className="flex items-center gap-4 p-4 border-b border-gray-300">
                                <Truck size={32} />
                                <div>
                                    <div className="text-base font-medium mb-1">Free Delivery</div>
                                    <button className="text-xs font-medium underline border-none bg-transparent cursor-pointer">
                                        Enter your postal code for Delivery Availability
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4">
                                <RotateCcw size={32} />
                                <div>
                                    <div className="text-base font-medium mb-1">Return Delivery</div>
                                    <div className="text-xs font-medium">
                                        Free 30 Days Delivery Returns. <button className="underline border-none bg-transparent cursor-pointer">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Items Section */}
                <div>
                    <SectionHeader label="Related Item" title="" />
                    <div className="grid grid-cols-4 gap-[30px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
                        {productsData.flashSales.slice(0, 4).map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
