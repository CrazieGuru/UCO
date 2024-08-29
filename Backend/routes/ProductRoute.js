import express from 'express'
import { isAuth } from '../middleware/IsAuth.js'
import { uploadFiles } from '../middleware/multer.js'
import { createProduct, deleteProduct, fetchAllProducts, fetchSingleProduct, updateProduct } from '../controllers/ProductControl.js'

const ProductRoute = express.Router()

ProductRoute.post("/product/new",isAuth,uploadFiles,createProduct)
ProductRoute.get("/product/all-products",fetchAllProducts)
ProductRoute.get("/product/single/:id",fetchSingleProduct)
ProductRoute.delete("/product/:id",isAuth,deleteProduct)
ProductRoute.put("/product/:id",isAuth,updateProduct)




export default ProductRoute