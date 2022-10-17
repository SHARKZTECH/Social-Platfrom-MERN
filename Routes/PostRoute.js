import express from "express";
import verify from "../Controllers/VerifyToken.js";
import { createPost, deletePost, getPost, getTimeLinePosts, likePost, updatePost } from "../Controllers/PostController.js";

const router=express.Router();

router.post("/",verify,createPost);
router.get("/:id",getPost);
router.get("/:id/timeline",getTimeLinePosts);
router.put("/:id",updatePost);
router.delete("/:id",verify,deletePost);
router.put("/:id/like",verify,likePost);


export default router;