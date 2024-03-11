const Product = require ('../models/product.model.js')
const addProduct= async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ 'message': error.message })
    }
}
const getAllProducts= async (req, res) => {
    try {
        const products = - await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ 'message': error.message })
    }
}
const getProduct= async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ 'message': error.message })
    }
}
//update a product 
const updateProduct= async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)
            (!product)
        {
            return res.status(400).json({ 'message': "Product not found" })
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    }
    catch (error) {
        res.status(500).send({ 'message': error.message })
    }
}
//delete
const deleteProduct =async (req,res)=>{
    try {
        const {id}= req.params
       const product = Product.findByIdAndDelete(id)
       if(!product){
        return res.status(404),json({message:"product not found "})
       }
       res.status(200).json({message:"product deleted successfully"})
    } catch (error) {
        res.status(500).json({'message':error.message})
    }
}
module.exports={addProduct,getAllProducts,getProduct,updateProduct,deleteProduct}