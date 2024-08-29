import mongoose from "mongoose";

const CartSchema = mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

export const Cart = mongoose.model("Cart",CartSchema)
