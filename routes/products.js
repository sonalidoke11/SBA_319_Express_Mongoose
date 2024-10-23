import express from 'express'
import Products from '../models/Products.js';

const router = new express.Router();

//get list of products
router.get('/', async(req, res) =>{
     try {
        const products = await Products.find()
        res.send(products)
    } catch (error) {
        res.status(500).send('Error fetching products'); 
    }     
})
export default router

//Add a new product
router.post('/', async(req,res)=>{
    try {
        const product = await Products.create(req.body)
        res.send(product)
        
    } catch(e){
        res.status(500).send('Error adding product');   
    }
})

// delete product with id
router.delete('/:id',async (req, res)=>{
    try {
        const deleteProduct = await Products.findByIdAndDelete(req.params.id)
        res.send({
            deletedProduct:deleteProduct,

        })
    } catch (error) {
        res.status(500).send('Error deleting product');
        
    }
})

// update product data
router.put('/:id',async (req, res)=>{
    try {
        const updateProduct = await Products.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(updateProduct)
    } catch (error) {
        res.status(500).send('Error updating product'); 
    }
})