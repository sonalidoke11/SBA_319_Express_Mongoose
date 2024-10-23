import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productsRouter from './routes/products.js'
import commentsRouter from './routes/comments.js'
import reviewsRouter from './routes/reviews.js'

dotenv.config()

mongoose.connect(process.env.MONGODB_URL)

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req,res)=>{  
    res.send("Welcome to SBA 319 with Express Node Mongoose creating CRUD API");
    
})

app.use('/products', productsRouter)
app.use('/comments', commentsRouter)
app.use('/reviews', reviewsRouter)

app.listen(PORT, ()=>{
    console.log(`Server is Running on port: ${PORT}`);
})



