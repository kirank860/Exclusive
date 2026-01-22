const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number },
    discount: { type: Number },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    image: { type: String, required: true },
    category: { type: String },
    isProductNew: { type: Boolean, default: false },
    description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
