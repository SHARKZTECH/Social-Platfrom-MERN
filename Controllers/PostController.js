import postModel from "../Models/postModel.js";
import UserModel from "../Models/userModel.js";
import mongoose from "mongoose";


export const createPost=async(req,res)=>{
    const newPost=new postModel(req.body)

    try{
        const post=await newPost.save();
        res.status(200).json(post);
    }catch(err){
            res.status(500).json({message:err.message});
        }   
}

export const getPost=async(req,res)=>{
    const id=req.params.id;

    try{
        const post=await postModel.findById(id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json({message:err.message});
    }   
}


export const updatePost=async(req,res)=>{
    const id=req.params.id;
    const {userId}=req.body;

    try{
        const post=await postModel.findById(id);
        if(post.userId===userId){
            await post.updateOne({$set:req.body,new:true});
            res.status(200).json(post);
        }else{
            res.status(403).json("Action forbidden!");
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }   
}

export const deletePost=async(req,res)=>{
    const id=req.params.id;
    try{
        const post=await postModel.findById(id);
        if(post){
            await post.deleteOne();
            res.status(200).json("Post deleted!");
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }   
}

export const likePost=async(req,res)=>{
    const id=req.params.id;
    const {userId}=req.body;

    try{
        const post=await postModel.findById(id);
        if(!post.likes.includes(userId)){
            await post.updateOne({$push:{likes:userId}});
            res.status(200).json("post liked!");
        }else{
            await post.updateOne({$pull:{likes:userId}});
            res.status(200).json("post unliked!");
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }   
}

export const getTimeLinePosts=async(req,res)=>{
    const userId=req.params.id;

    try{
        const currentUserPosts=await postModel.find({userId:userId});
        const followingPosts=await UserModel.aggregate([
        {
            $match:{
                _id:new mongoose.Types.ObjectId(userId)
            }
        },
        {
            $lookup: {
                from: "posts",
                localField: "following",
                foreignField: "userId",
                as: "followingPosts"
            }
        },
        {
            $project: {
                followingPosts: 1,
                _id: 0
            }
        }
        
        ])

        res.status(200)
        .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
        .sort((a,b)=> b.createdAt - a.createdAt)
        );
         
    }catch(err){
        res.status(500).json({message:err.message});
    } 

}


