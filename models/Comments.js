import mongoose from 'mongoose'

export const commentsSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Types.ObjectId,
        ref: 'Comments', // use to connect comments and products Model together
        required: true
    },
    title:{
        type: String,
        required: true,
    },
    visibility:{
        type: Boolean,
        default: true
    },
    text:{
        type: String
    }
},
{timestamps: true}
)

const Comments = new mongoose.model('Comments',commentsSchema)

export default Comments;
