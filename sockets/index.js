import {Server} from "socket.io"
const sockets=(server)=>{
const io=new Server(server,{cors:{origin:"*",  methods: ["GET", "POST"] }});

//Run when client connects
let activeUsers=[]

io.on("connection",socket=>{
    //add new User
    socket.on("new-user-add",(newUserId)=>{
        if(!activeUsers.some((user)=>user.userId === newUserId)){
           activeUsers.push({
            userId:newUserId,
            socketId:socket.id
           })
        }
        io.emit('get-users',activeUsers);
    });

    //send msg
    socket.on("send-message",(data)=>{
        const {receiverId}=data;
        const user=activeUsers.find((user)=>user.userId === receiverId);
        if(user){
           io.to(user.socketId).emit("receive-message",data);
        }
    })
    //Disconnects
    socket.on("disconnect",()=>{
       activeUsers=activeUsers.filter(user=>user.socketId !== socket.id );
       io.emit('get-users',activeUsers);
    })

});

}
export default sockets;