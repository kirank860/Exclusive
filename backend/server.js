const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
    res.send('Exclusive API is running...');
});

// API Routes
app.use('/api/products', require('./routes/productRoutes'));

// Database Connection
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error('ERROR: MONGO_URI is not defined in .env file');
} else {
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log('Successfully connected to MongoDB Atlas');
            // Only listen if not in production (Vercel handles the listener in prod)
            if (process.env.NODE_ENV !== 'production') {
                app.listen(PORT, () => {
                    console.log(`Server is running on port ${PORT}`);
                });
            }
        })
        .catch((err) => {
            console.error('Database connection error:', err.message);
        });
}

module.exports = app;
