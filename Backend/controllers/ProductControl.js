import Product from "../models/ProductModel.js";
import {rm} from 'fs'

export const createProduct = async (req,res)=>{
    try {
        if (req.user.role != "admin") {
            return res.json({success:false,message:"Access Denied"})
        }
        const {title,description,stock,price,category} = req.body

        const image = req.file

        if (!image) {
            res.json({success:false,message:"Please select product image"})
        }

        const product = await Product.create({
            title,
            description,
            stock,
            price,
            category,
            image:image?.path
        })
        res.json({success:true,message:"Product added successfully",product})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const fetchAllProducts = async (req,res)=>{
    try {
        const products = await Product.find()

        res.json({success:true,message:"All products",products})
        
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const fetchSingleProduct = async (req,res)=>{
    try {
        const id = req.params.id

        const product = await Product.findById(id)
        res.json({success:true,message:"Product Details",product})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}


export const deleteProduct = async (req,res)=>{
    try {
        if (req.user.role != "admin") {
            return res.json({success:false,message:"Access denied"})
        }
    
        const product = await Product.findById(req.params.id)
    
        if (!product) {
            return res.json({success:false,message:"Invalid product details"})
        }

        rm(product.image,()=>{
            console.log("Image Deleted")
        })

        await product.deleteOne()

        res.json({success:true,message:"Product details deleted successfully"})
        
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const updateProduct = async (req,res)=>{
    try {
        if (req.user.role != "admin") {
            return res.json({success:false,message:"Access denied"})
        }

        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.json({success:false,message:"Invalid product details"})
        }

        if (req.body.stock) {
            product.stock = req.body.stock
            await product.save()
        }
        res.json({success:true,message:"Stock Updated"})


    } catch (error) {
        res.json({success:false,message:"error"})
    }
}