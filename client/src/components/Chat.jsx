import React, { useEffect } from 'react'
import {Button, Card, Col, Form, Row} from "react-bootstrap"
import SearchBox from "./SearchBox"
import HeaderIcons from "./HeaderIcons"
import Conversation from './Conversation'
import axios from "axios"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../redux/actions/base'
import ChartBox from './ChartBox'
import {io} from "socket.io-client"
import { useRef } from 'react'

export default function Chat() {
  const [chats,setChats]=useState([]);
  const [currentChat,setCurentChat]=useState(null);
  const [onlineUsers,setOnlineUsers]=useState([]);
  const {userInfor}=useSelector((state)=>state.login);
  const socket=useRef();

  useEffect(()=>{
      socket.current=io("http://127.0.0.1:5000");
      socket.current.emit("new-user-add",userInfor.user._id);
      socket.current.on("get-users",users=>{
        setOnlineUsers(users)
      })
  },[userInfor.user])
  useEffect(()=>{
    const getChats=async()=>{
      try{
      const {data}=await axios.get(`${BASE_URL}/api/chat/${userInfor.user._id}`);
        setChats(data);
      }catch(err){
        console.log(err)
      }
    }
    getChats();
  },[userInfor.user._id])

  return (
    <div className='chat'>
        <Row>
            <Col md={4}>
          <SearchBox/>
               <Card className='p-1 mt-2'
               style={{height:"92vh"}}
               >
                <h4 className='text-center pt-2'>Chats</h4> 

                {chats.map((chat)=>(
                <div onClick={()=>{setCurentChat(null);setCurentChat(chat)}}>
                  <Conversation chat={chat} currentUserId={userInfor.user._id} token={userInfor.token}/>                  
                 </div>                   
                  ))}    
                         
               </Card>
            </Col>

            <Col md={8}> 
            <HeaderIcons chat={true}/>
              <Card className='p-1'
              style={{height:"92vh"}}> 
                 {currentChat ?(
                  <ChartBox chat={currentChat} currentUserId={userInfor.user._id} token={userInfor.token}/>
                 ):(
                   <p className='text-center mt-3'>Click on  user to a start a conversation!</p>  

                 )}

               
              </Card>
            </Col>
        </Row>
    </div>
  )
}
