import mongoose from 'mongoose'
import { productsSchema } from './Products';

// Define a user schema with validations
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, 
    minlength: 3,   
    maxlength: 15,  
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    match: /.+\@.+\..+/ 
  },
  role: {
    type: String,
    enum: ['admin', 'moderator', 'buyer','seller'], 
    required: true
  },
  age: {
    type: Number,
    min: 18,
    max: 120 
  },
  products:[productsSchema],
  
},
{timestamps: true}
);

const User = mongoose.model('User', userSchema);