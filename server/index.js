import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

import AuthRoute from "./Routes/AuthRoute.js"
import UserRoute from "./Routes/UserRoute.js"
import PostRoute from "./Routes/PostRoute.js"

dotenv.config();
const app=express();
app.use(express.json({limit:'30mb',extended:true}));
app.use(express.urlencoded({limit:'30mb',extended:true}));
const PORT=process.env.PORT;


app.use("/auth",AuthRoute);
app.use("/users",UserRoute);
app.use("/posts",PostRoute);

mongoose
.connect(process.env.URL,
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log("Listening on Port: "+PORT)))
.catch((err)=>console.log(err));

