import express from 'express'
import { registerUser,verify,loginUser, myProfile } from '../controllers/UserControl.js'
import { isAuth } from '../middleware/IsAuth.js'

const UserRouter = express.Router()


UserRouter.post("/user/register",registerUser)
UserRouter.get("/user/verify",verify)
UserRouter.get("/user/login",loginUser)
UserRouter.get("/user/profile",isAuth,myProfile)

export default UserRouter