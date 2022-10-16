import UserModel from "../Models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

export const getUsers=async (req,res)=>{

    try{
        const users=await UserModel.find();
        if(users.length>0){

            res.status(200).json(users);
        }

    }catch(err){
        res.status(500).json({message:err.message});
    }

}

export const getUser=async(req,res)=>{

    const id=req.params.id;

    try{
    const user=await (await UserModel.findById(id));

    if(user){
        const {password,...otherDetails}=user._doc
        res.status(200).json(otherDetails);
    }else{
        res.status(404).json("user with that id does not exist");
    }
    }catch(err){
        res.status(500).json({message:err.message});
    }
 
}

export const updateUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUserId,currentUserAdminStatus,password}=req.body;

    if(id===currentUserId||currentUserAdminStatus){
        try{
            if(password){
                const salt=await bcryptjs.genSalt(10);
                req.body.password=await bcryptjs.hash(password,salt);
            }
            const user=await UserModel.findByIdAndUpdate(id,req.body,{new:true});
            const token=jwt.sign({_id:user._id},"secrete_token");

            res.status(200).json({user,token});
        }catch(err){
            res.status(500).json({message:err.message});
        }    
        
    }else{
        res.status(403).json("Access Denied!");
    }
}

export const deleteUser=async(req,res)=>{
    const id=req.params.id;

    const {currentUserId,currentUserAdminStatus}=req.body;

    if(id===currentUserId||currentUserAdminStatus){
        try{
            await UserModel.findByIdAndDelete(id);
            res.status(200).json("User deleted Successfull!");
        }catch(err){
            res.status(500).json({message:err.message});
        }    
        
    }else{
        res.status(403).json("Access Denied!");
    }
}

export const followUser=async(req,res)=>{
    const id=req.params.id;

    const {currentUserId}=req.body;

    if(currentUserId===id){
        res.status(403).json("Action forbidden")
    }else{
        try{
            const followUser=await UserModel.findById(id);
            const followingUser=await UserModel.findById(currentUserId);
            
            if(followUser && followingUser){            
             if(!followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$push:{followers:currentUserId}});
                await followingUser.updateOne({$push:{following:id}});
                res.status(200).json("user follwed!");
             }else{
                res.status(403).json("Already follwing the user!");
             }
            }else{
                res.status(403).json("Incorrect userIds");
            }
        }catch(err){
            res.status(500).json({message:err.message});
        }    
        
    }

}

export const UnFollowUser=async(req,res)=>{
    const id=req.params.id;

    const {currentUserId}=req.body;

    if(currentUserId===id){
        res.status(403).json("Action forbidden")
    }else{
        try{
            const followUser=await UserModel.findById(id);
            const followingUser=await UserModel.findById(currentUserId);
            
            if(followUser && followingUser){            
             if(followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$pull:{followers:currentUserId}});
                await followingUser.updateOne({$pull:{following:id}});
                res.status(200).json("user unfollwed!");
             }else{
                res.status(403).json("You are not follwing the user!");
             }
            }else{
                res.status(403).json("Incorrect userIds");
            }
        }catch(err){
            res.status(500).json({message:err.message});
        }    
        
    }

}
