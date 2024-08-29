import jwt from 'jsonwebtoken'
import User from '../models/UserModel.js'


export const isAuth = async (req,res,next) =>{
    try {
        const token = req.headers.token

        if (!token) {
            return res.json({success:false,message:"Please Login to access"})
        }

        const decodeToken = jwt.decode(token,process.env.JWT_SECRET)
        

        req.user = await User.findById(decodeToken._id).select('-password')


        next()
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}