import mongoose from 'mongoose'

export const reviewsSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Types.ObjectId,
        ref: 'Reviews', // use to connect comments and products Model together
        required: true
    },
    title:{
        type: String,
    },
    visibility:{
        type: Boolean,
        default:true
    },
    rating:{
        type:Number,
        required: true,
    },
    text:{
        type: String
    }
},
{timestamps: true}
)


const Reviews = new mongoose.model('Reviews',reviewsSchema)

export default Reviews;