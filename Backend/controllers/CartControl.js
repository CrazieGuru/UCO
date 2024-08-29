import { Cart } from "../models/CartModel.js";
import jwt from "jsonwebtoken"


export const AddToCart = async (req, res) => {
    try {
        const {id} = req.body;
        const user_id = req.user._id;

        // Find an existing cart item
        let cart_item = await Cart.findOne({ user: user_id, product: id });

        if (cart_item) {
            // Update quantity if item already in cart
            cart_item.quantity += 1; // Increment the quantity
            try {
                await cart_item.save();
            } catch (error) {
                console.error("Error updating cart item:", error);
            }
        } else {
            // Create a new cart item if not found
            cart_item = new Cart({ user: user_id, product: id, quantity: 1 });
            await cart_item.save();
        }

        // const populatedCartItem = await Cart.findById(cart_item._id)
        //     .populate('user')  // Populates the user field with full user document
        //     .populate('product')


        res.status(200).json({ success: true,cart_item});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const removeCart = async (req, res) => {
    try {
        const {id} = req.body;
        const user_id = req.user._id;

        // Find an existing cart 
        let cart_item = await Cart.findOne({ user: user_id, product: id });

        if (cart_item) {
            // Update quantity if item already in cart
            cart_item.quantity -= 1; // Increment the quantity
            try {
                await cart_item.save();
            } catch (error) {
                console.error("Error updating cart item:", error);
            }
        } else {
            // Create a new cart item if not found
            cart_item = new Cart({ user: user_id, product: id, quantity: 1 });
            await cart_item.save();
        }

        // const populatedCartItem = await Cart.findById(cart_item._id)
        //     .populate('user')  // Populates the user field with full user document
        //     .populate('product')


        res.status(200).json({ success: true,cart_item});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteFromCart = async(req,res) =>{
    try {
        const {id} = req.body
        console.log(id)
        const user_id = req.user._id;

        let cart_item = await Cart.findOne({_id:id});

        if (!cart_item) {
            res.status(500).json({ success: false, message:"Product not found"});
        }
        else{
            const result = await Cart.deleteOne({_id:id});
            if (result.deletedCount > 0) {
                console.log('Cart item deleted successfully.');
            } else {
                console.log('Failed to delete the cart item.');
            }
        }
        res.json({success:true,message:"Cart item deleted successfully"})

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}