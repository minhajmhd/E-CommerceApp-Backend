// Import mongoose
const mongoose = require('mongoose');

// Define connection string
mongoose.connect('mongodb://localhost:27017/cart', () => {
    console.log('Connected to MongoDb');
})

// Create model to store all products
const Product = mongoose.model('Product', {
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
})

module.exports = {
    Product
}