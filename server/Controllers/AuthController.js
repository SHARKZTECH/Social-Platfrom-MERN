import UserModel from "../Models/userModel.js";
import bcryptjs from "bcryptjs";

export const registerUser=async(req,res)=>{
    const {username,password,firstname,lastname}=req.body;
    const salt=await bcryptjs.genSalt(10)
    const hashPassword=await bcryptjs.hash(password,salt);

    const newUser=new UserModel({username,password: hashPassword,firstname,lastname});
    try{
        await newUser.save();
        res.status(200).json(newUser.username);

    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const loginUser=async(req,res)=>{
    const {username,password}=req.body;
    
    try{
    const user=await UserModel.findOne({username:username});
    if(user){
        const valid=await bcryptjs.compare(password,user.password);
        if(valid){
            res.status(200).json(user);
        }else{
            res.status(400).json("Cool down and enter correct password!");
        }
    }else{
        res.status(404).json("user doesnot exist!");
    }
    }catch(err){
        res.status(500).json({message:err.message})
    }

}