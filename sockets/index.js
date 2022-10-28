const path=require("path");
const http=require("http");
const express=require("express");
const socketio=require("socket.io");

const app=express();
const server=http.createServer(app);
const io=socketio(server,{cors:{origin:"*",  methods: ["GET", "POST"] }});
//Set Static folder
// app.use(express.static(path.join(__dirname,'server')));
//Run when client connects

io.on("connection",socket=>{
    //Welkam user
    socket.emit("message","Welkam to SharChart!");
    //Broadcast when user connect
    socket.broadcast.emit("message","A user has joine the chat!");
    //Dissconnect
    socket.on("disconnect",()=>{
        io.emit("message","A user has left the chat!");
    })
    //Listen for ChatMsg
    socket.on("chatMsg",msg=>{
        io.emit("message",msg);
    });
})

const PORT=5000 || process.env.PORT;
server.listen(PORT,()=>console.log(`Running ${PORT}`))