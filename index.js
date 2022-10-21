import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import path from "path"
import { fileURLToPath } from 'url';

import AuthRoute from "./Routes/AuthRoute.js"
import UserRoute from "./Routes/UserRoute.js"
import PostRoute from "./Routes/PostRoute.js"

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json({limit:'30mb',extended:true}));
app.use(express.urlencoded({limit:'30mb',extended:true}));
const PORT=process.env.PORT;


app.use("/api/auth",AuthRoute);
app.use("/api/users",UserRoute);
app.use("/api/posts",PostRoute);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,"./client/dist")));

app.get("*",function(_,res){
    res.sendFile(
        path.join(__dirname,"./client/dist/index.html"),
        function(err){
            if(err){
                res.status(500).send(err);
            }
        }
    )
});

mongoose
.connect(process.env.MONGOBD_URI,
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log("Listening on Port: "+PORT)))
.catch((err)=>console.log(err));

