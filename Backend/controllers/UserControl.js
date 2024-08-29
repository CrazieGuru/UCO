import User from "../models/UserModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import sendMail from "../middleware/sendotpmail.js"

export const registerUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body

        let user = await User.findOne({email})

        if (user) {
            res.json({success:false,message:"Email id already exists"})
        }
        
        const hashedpassword = await bcrypt.hash(password,10)

        const otp = Math.floor(Math.random()*1000000);

        user = {name,email,hashedpassword}
        const activationtoken = jwt.sign({user,otp},process.env.ACTIVATION_SECRET,{
            expiresIn:"5m"
        })
        const subject = "Welcome to UCO Deliveries"
        const mailbody = `Please verify your account using OTP ${otp}`
        await sendMail(email,subject,mailbody)

        res.json({success:true,message:"OTP sent to your mail",activationtoken})
        

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const verify = async (req,res)=>{
    
    try {

        const {otp,activationtoken} = req.body
        
        const verify = jwt.verify(activationtoken,process.env.ACTIVATION_SECRET);
        console.log(verify.user)
        
        if (!verify) {
            return res.json({success:false,message:"OTP Expired"})
        }
        
        if (verify.otp !== otp) {
            return res.json({success:false,message:"Invalid OTP"})
        }
        

        await User.create({
            fullname:verify.user.name,
            email:verify.user.email,
            password:verify.user.hashedpassword
        })

        res.json({success:true,message:"User Registration Success"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            return res.json({success:false,message:"Invalid Credentials"})
        }
        
        const matchpassword = await bcrypt.compare(password,user.password)
        
        if (!matchpassword) {
            return res.json({success:false,message:"Invalid C   redentials"})            
        }

        const token = jwt.sign({_id:user.id},process.env.JWT_SECRET,{expiresIn:"15d"})

        const {password:hashedpassword,...userDetails} = user.toObject()
  
        res.json({success:true,message:"Welcome " + user.fullname, token,userDetails})
        
        
    } catch (error) {
        res.json({success:false,message:error.message})
        
    }

}

export const myProfile = async (req,res)=>{
    try {
        // const user = req.user
        const user = await User.findById(req.user._id).select("-password")
        
        res.json({success:true,user})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}