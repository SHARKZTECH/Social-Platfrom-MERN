import ChatModel from "../Models/chatModel.js";

export const createChat=async(req,res)=>{
    const newChat=new ChatModel({
        members:[req.body.senderId,req.body.receiverId],

    });
    try{
        const chat=await ChatModel.findOne({
            members:{$all:[req.body.senderId,req.body.receiverId]}
        })
        if(!chat){
            const result=await newChat.save();
            res.status(200).json(result);
        }else{
            res.status(400).json({"message":"Chat Already Exists!"})
        }
    }catch(err){
        res.status(500).json(err)   
    }
}


export const userChat=async(req,res)=>{
  
    try{
        const chat=await ChatModel.find({
            members : {$in :[req.params.userId]}
        })
            res.status(200).json(chat);
    }catch(err){
        res.status(500).json(err)   
    }
}


export const findChat=async(req,res)=>{
    const newChat=new ChatModel({
    });
    try{
        const chat=await ChatModel.findOne({
            members:{$all:[req.params.firstId,req.params.secondId]}
        })
        res.status(200).json(chat);
    }catch(err){
        res.status(500).json(err)   
    }
}




