import express from 'express'
import { AddToCart, deleteFromCart, removeCart } from '../controllers/CartControl.js'
import { isAuth } from '../middleware/IsAuth.js'

const CartRoute = express.Router()

CartRoute.post("/cart/additem",isAuth,AddToCart)
CartRoute.post("/cart/removeitem",isAuth,removeCart)
CartRoute.post("/cart/deleteitem",isAuth,deleteFromCart)


export default CartRoute