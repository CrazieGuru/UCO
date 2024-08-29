import express from 'express'
import dotenv from "dotenv"
import connectDB from './database/db.js'
import UserRouter from './routes/UserRoute.js'
import ProductRoute from './routes/ProductRoute.js'
import CartRoute from './routes/CartRoute.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use("/api/",UserRouter)
app.use("/api/",ProductRoute)
app.use("/api/",CartRoute)

app.use("/uploads",express.static("uploads"))

const PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log(`Server Running in ${PORT}`)
    connectDB()

})