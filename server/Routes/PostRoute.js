import express from "express";
import { createPost, deletePost, getPost, getTimeLinePosts, likePost, updatePost } from "../Controllers/PostController.js";

const router=express.Router();

router.post("/",createPost);
router.get("/:id",getPost);
router.get("/:id/timeline",getTimeLinePosts);
router.put("/:id",updatePost);
router.delete("/:id",deletePost);
router.put("/:id/like",likePost);


export default router;