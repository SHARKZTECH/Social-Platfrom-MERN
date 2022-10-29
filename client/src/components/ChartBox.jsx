import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Button, Form} from "react-bootstrap"
import PROF from "../assets/cover.jpg"
import { BASE_URL } from '../redux/actions/base';
import {format}  from "timeago.js"
import ReactInputEmoji from "react-input-emoji"
import { useRef } from 'react';



export default function ChartBox({chat,currentUserId,token,setSendMsg,receiveMsg}) {
    const [userData,setUserData]=useState({});
    const [messages,setMessages]=useState([]);
    const [newMsg,setNewMsg]=useState(""); 
    const scroll=useRef();
  
    useEffect(()=>{
       if(receiveMsg !== null && receiveMsg.chatId === chat._id){
        setMessages([...messages,receiveMsg]);
       }
    },[receiveMsg])

    useEffect(()=>{
      const config={
        headers:{
            'Content-type':'application/json',
            "auth-token":token
        }
      } 
      const userId=chat.members.filter((id)=>id!==currentUserId);
      const getUser=async()=>{
        const {data}=await axios.get(`${BASE_URL}/api/users/${userId}`,config)
        setUserData(data)
      }
      getUser();
    },[chat])

    useEffect(()=>{
      const getMgs=async()=>{
        const {data}=await axios.get(`${BASE_URL}/api/message/${chat._id}`)
        setMessages(data)

      }
      getMgs();
    },[chat._id])

    const handleChange=(newMsg)=>{
      setNewMsg(newMsg);
    }

    //Scroll to the last msg
    useEffect(()=>{
       scroll.current?.scrollIntoView({behavior:"smooth"})
    },[messages]);

    const handleSend=async(e)=>{
      e.preventDefault();
      const message={
        senderId:currentUserId,
        chatId:chat._id,
        text:newMsg
      }
      //send msh to db
      try{
        const {data}=await axios.post(`${BASE_URL}/api/message`,message);
        setNewMsg("");
        setMessages([...messages,data]);
      }catch(err){
        console.log(err)
      }

      //send message to socket server
      const receiverId=chat.members.find((id)=>id !== currentUserId);
      setSendMsg({...message,receiverId});
    }

  return (
    <div>
    <div className='d-flex align-items-center border-bottom border-infor'>
        <img src={userData.profilePic || PROF} alt="profile" className='img'/>
        <p>{userData.username}</p>
        </div>

        <div className='msg pt-2'>
        {/* <p className='msg-send'>Hellow</p>
        <p className='msg-receive'>Hellow 2</p> */}

        {messages?.map((msg)=>(
           <div key={msg._id} ref={scroll} className={msg.senderId === currentUserId ? `msg-send` : `msg-receive`}>
            <p>{msg.text}</p>
            <span>{format(msg.createdAt)}</span>
           </div>
        ))}
 
        </div>
        
        <div className='d-flex align-items-center'>
        <Button>+</Button>
        {/* <Form.Group
        style={{width:"70%"}}
        >
            <Form.Control
            type="text"

            ></Form.Control>
        </Form.Group> */}
        <ReactInputEmoji
        value={newMsg}
        onChange={handleChange}
        />
        <Button onClick={handleSend}>send</Button>
        </div>
    </div>
  )
}
