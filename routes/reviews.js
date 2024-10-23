import express from 'express'
import Reviews from '../models/Reviews.js';

const router = new express.Router();

//get all reviews
router.get('/', async(req, res) =>{
     try {
        const reviews = await Reviews.find()
        res.send(reviews)
    } catch (error) {
        res.status(500).send('Error fetching reviews'); 
    }     
})
export default router

//Add a new review
router.post('/', async(req,res)=>{
    try {
        const review = await Reviews.create(req.body)
        res.send(review)
        
    } catch(e){
        res.status(500).send('Error adding reviews');   
    }
})

// delete review with id
router.delete('/:id',async (req, res)=>{
    try {
        const deleteReview = await Reviews.findByIdAndDelete(req.params.id)
        res.send({
            deleteReview:deleteReview,

        })
    } catch (error) {
        res.status(500).send('Error deleting review');
        
    }
})

// update review 
router.put('/:id',async (req, res)=>{
    try {
        const updateReview = await Reviews.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(updateReview)
    } catch (error) {
        res.status(500).send('Error updating review'); 
    }
})