import express from "express";
import { deleteUser, followUser, getUser, getUsers, UnFollowUser, updateUser } from "../Controllers/UserContreller.js";
import verify from "../Controllers/VerifyToken.js";


const router=express.Router();

router.get("/",verify,getUsers);
router.get("/:id",getUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);
router.put("/:id/follow",followUser);
router.put("/:id/unfollow",UnFollowUser);


export default router;