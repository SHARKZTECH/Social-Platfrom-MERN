import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import path from "path"
import { fileURLToPath } from 'url';
import http from "http"

import AuthRoute from "./Routes/AuthRoute.js"
import UserRoute from "./Routes/UserRoute.js"
import PostRoute from "./Routes/PostRoute.js"
import ChatRouter from "./Routes/ChatRouter.js"
import MessageRouter from "./Routes/MessageRouter.js";
import socket from "./sockets/index.js"

dotenv.config();
const app=express();
const server=http.createServer(app);
socket(server);
app.use(cors());
app.use(express.json({limit:'30mb',extended:true}));
app.use(express.urlencoded({limit:'30mb',extended:true}));
const PORT=5000 || process.env.PORT;


app.use("/api/auth",AuthRoute);
app.use("/api/users",UserRoute);
app.use("/api/posts",PostRoute);
app.use("/api/chat",ChatRouter);
app.use("/api/message",MessageRouter);


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
.connect("mongodb://127.0.0.1:27017/social",
{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> server.listen(PORT,()=>console.log("Listening on Port: "+PORT)))
.catch((err)=>console.log(err));

