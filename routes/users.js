import express from 'express'
import Users from '../models/Users.js'

const router = new express.Router();

router.get('/', async(req, res) =>{
    // res.send('get all users')
    try {
        const users = await Users.find()
        res.send(users)
    } catch (error) {
        console.log(error);
        
    }
})

//create a new user
router.post('/', async(req,res)=>{
    try {
        const user = await Users.create(req.body)
        res.send(user)
        
    } catch(e){
        console.log(error);    
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const user = await Users.findById(req.paras.id)
        res.send(user)
    } catch (error) {
       console.log(error);
        
    }
} )

router.delete('/:id',async (req, res)=>{
    try {
        const deleteUser = await Users.findByIdAndDelete(req.params.id)
        res.send({
            deletedUser:deleteUser,

        })
    } catch (error) {
        console.log(error);
        
    }
})

router.put('/:id',async (req, res)=>{
    try {
        const updateUser = await Users.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(updateUser)
    } catch (error) {
        console.log(error);
        
    }
})

export default router