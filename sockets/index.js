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

    socket.on("disconnect",()=>{
       activeUsers=activeUsers.filter(user=>user.socketId !==socket.id );
    })

});

}
export default sockets;