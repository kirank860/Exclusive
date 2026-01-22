const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const productsData = require('../frontend/src/data/productsData.json');

dotenv.config();

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB for seeding...');

        // Clear existing products
        await Product.deleteMany();
        console.log('Cleared existing products');

        // Flash Sales
        const products = productsData.flashSales.map(p => ({
            ...p,
            category: 'Flash Sales',
            isProductNew: p.isNew
        }));

        // Best Selling (if any in your JSON, add them here)
        // For now just seeding flashSales as an example

        await Product.insertMany(products);
        console.log('Successfully seeded database with products!');

        process.exit();
    } catch (err) {
        console.error('Seeding error:', err.message);
        process.exit(1);
    }
};

seedDatabase();
