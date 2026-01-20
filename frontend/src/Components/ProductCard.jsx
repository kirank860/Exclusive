import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, showDiscount = false }) => {
    const navigate = useNavigate();
    const {
        id,
        name,
        price,
        originalPrice,
        discount,
        rating,
        reviews,
        image,
        colors,
        isNew
    } = product;

    const handleCardClick = () => {
        navigate(`/product/${id}`);
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);

        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < fullStars ? "#D4AF37" : "none"} stroke="#D4AF37" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            );
        }
        return stars;
    };

    return (
        <div
            onClick={handleCardClick}
            className="group flex flex-col gap-6 transition-all duration-700 cursor-pointer min-w-[270px]"
        >
            <div className="relative aspect-[3/4] bg-luxury-cream overflow-hidden flex justify-center items-center">
                {showDiscount && discount && (
                    <span className="absolute top-4 left-4 bg-luxury-black text-white py-1 px-3 text-[10px] uppercase tracking-tighter z-10 font-bold">
                        -{discount}%
                    </span>
                )}
                {isNew && (
                    <span className="absolute top-4 left-4 bg-luxury-gold text-white py-1 px-3 text-[10px] uppercase tracking-tighter z-10 font-bold">
                        New Arrival
                    </span>
                )}

                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/10 transition-all duration-500 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-luxury-black py-4 px-0 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 translate-y-4 group-hover:translate-y-0 hover:bg-luxury-gold hover:text-white">
                        Add to Collection
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start gap-4">
                    <h3 className="text-sm font-medium text-luxury-black uppercase tracking-widest line-clamp-1 flex-1">
                        {name}
                    </h3>
                    <div className="flex flex-col items-end whitespace-nowrap">
                        <span className="text-sm font-bold text-luxury-black">${price}</span>
                        {originalPrice && (
                            <span className="text-[10px] text-gray-400 line-through">${originalPrice}</span>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-100">
                    <div className="flex gap-1">{renderStars(rating)}</div>
                    <span className="text-[10px] uppercase tracking-tighter text-gray-400">{reviews} Reviews</span>
                </div>

                {colors && colors.length > 0 && (
                    <div className="flex gap-3 mt-4">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className="w-3 h-3 rounded-full ring-1 ring-offset-2 ring-gray-200 transition-all duration-500 group-hover:scale-110"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
