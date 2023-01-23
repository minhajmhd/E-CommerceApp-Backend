// server creation : 

// 1 Import express
const express = require('express');

// 5  import cors
const cors = require('cors');

// 2 using express create an application
const app = express();

// 3 Set up port number
app.listen(3000, () => {
    console.log('Express server listening on port 3000');
})

// 4 Use json parser for server application
app.use(express.json())

// Using cors specify origin to the server
app.use(cors({
    origin: 'http://localhost:4200'
}))

const dataService = require('./services/dataService')

// Api to get all products
app.get('/all-products', (req, res) => {
    dataService.getAllProducts()
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})