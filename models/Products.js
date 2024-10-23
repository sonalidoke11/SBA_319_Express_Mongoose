import mongoose from 'mongoose'
import {commentsSchema} from './Comments.js'
import {reviewsSchema} from './Reviews.js'

export const productsSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'Products', // use to connect products and users Model together
        required: true
    },
    productname:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    category:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 10
    },
    price:{
        type: Number,
        required: true,
    },
    description:{
        type: String
    },
    inStock: {
        type: Boolean, 
        default: true
    },
    imgurl:{},
    comments:[commentsSchema],
    reviews: [reviewsSchema]
},
{timestamps: true},
)

const Products = new mongoose.model('Products',productsSchema)

export default Products;