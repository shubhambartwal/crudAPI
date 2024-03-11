const express= require ('express')
const router=express.Router();
const Product =require( '../models/product.model');
const {addProduct,updateProduct,getAllProducts,getProduct,deleteProduct} =require ('../controllers/product.controller.js')
router.post('/', addProduct)
router.get('/', getAllProducts)
router.get('/:id',getProduct)
//update a product 
router.put('/:id', updateProduct)
//delete
router.delete('/:id',deleteProduct)
module.exports=router;