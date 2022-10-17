import express from "express";
import { deleteUser, followUser, getUser, getUsers, UnFollowUser, updateUser } from "../Controllers/UserContreller.js";
import verify from "../Controllers/VerifyToken.js";


const router=express.Router();

router.get("/",verify,getUsers);
router.get("/:id",verify,getUser);
router.put("/:id",verify,updateUser);
router.delete("/:id",verify,deleteUser);
router.put("/:id/follow",verify,followUser);
router.put("/:id/unfollow",verify,UnFollowUser);


export default router;