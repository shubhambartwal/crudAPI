const express = require('express');
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute =require('./routes/product.route.js')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/products',productRoute)

app.listen(3000, () => {
    console.log('server is running on port 3000')
})
app.get('/', (req, res) => {
    res.send('Hello from node api')
})

mongoose.connect('mongodb+srv://admin:admin@shubhamcluster.jm5rjqd.mongodb.net/mycontacts-backend?retryWrites=true&w=majority&appName=shubhamcluster')
    .then(() => console.log('connected to database')).catch(() => console.log('connection fail'))