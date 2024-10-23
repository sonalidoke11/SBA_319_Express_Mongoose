import express from 'express'
import Comments from '../models/Comments.js';

const router = new express.Router();

//get all comments
router.get('/', async(req, res) =>{
     try {
        const comments = await Comments.find()
        res.send(comments)
    } catch (error) {
        res.status(500).send('Error fetching comments'); 
    }     
})
export default router

//Add a new comment
router.post('/', async(req,res)=>{
    try {
        const comment = await Comments.create(req.body)
        res.send(comment)
        
    } catch(e){
        res.status(500).send('Error adding comments');   
    }
})

// delete comment with id
router.delete('/:id',async (req, res)=>{
    try {
        const deleteComment = await Comments.findByIdAndDelete(req.params.id)
        res.send({
            deletedComment:deleteComment,

        })
    } catch (error) {
        res.status(500).send('Error deleting comment');
        
    }
})

// update comment 
router.put('/:id',async (req, res)=>{
    try {
        const updateComment = await Comments.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(updateComment)
    } catch (error) {
        res.status(500).send('Error updating comment'); 
    }
})