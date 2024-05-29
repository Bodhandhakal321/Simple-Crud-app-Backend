const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route')
const req = require('express/lib/request');
const app  = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/products',productRoute)

app.get('/', (req, res) => {
    res.send('Hello from node API server');
});


//reading all products
// app.get('/api/products', async(req, res)=>{
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products)
        
//     } catch (error) {
//         res.status(500).json({message:error.message});
        
//     }
// });


//getting or reading the product

// app.get('/api/products/:id', async(req, res)=>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product)
        
//     } catch (error) {
//         res.status(500).json({message:error,message})
//     }
// })


//create a product 

// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);  // 200 success
//     } catch (error) {
//         console.error('Error creating product:', error); // Log error
//         res.status(500).json({ message: error.message }); // Server error
//     }
// });

//update a product

// app.put('/api/products/:id', async(req,res)=>{
//     try {
//         const {id} = req.params;

//         const product = await Product.findByIdAndUpdate(id,req.body);
//         if(!product){
//             res.status(200).json({message:"Product not found"})
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
        
//     } catch (error) {
//         res.status(500).json({message:error.message})
        
//     }
// })

//delete a product

// app.delete('/api/products/:id', async(req,res)=>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             res.status(400).json({message: "Product NOt found"})
//         }
//         res.status(200).json({message:"Product deleted Successfully"});

        
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

mongoose.connect("mongodb+srv://admin:foV1I1izbyeYMgYJ@backenddb.lez7vnu.mongodb.net/Node_API?retryWrites=true&w=majority&appName=BackendDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to Database");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error); // Log error
    });
