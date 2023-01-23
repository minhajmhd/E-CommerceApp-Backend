// import db
const db = require('./db');

// get all products from the database
const getAllProducts = () => {
    // to fetch all products from mongodb
    return db.Product.find().then((result) => {
        if (result) {
            return {
                status: true,
                statusCode: 200,
                Products: result
            }
        }
        else {
            return {
                status: false,
                statusCode: 402,
                message: 'Products not found'
            }
        }
    })
}

module.exports = {
    getAllProducts
}