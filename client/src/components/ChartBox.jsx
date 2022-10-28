import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Button, Form} from "react-bootstrap"
import PROF from "../assets/cover.jpg"
import { BASE_URL } from '../redux/actions/base';



export default function ChartBox({chat,currentUserId,token}) {
    const [userData,setUserData]=useState({});
    const [messages,setMessages]=useState([]);
  
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

  return (
    <div>
    <div className='d-flex align-items-center border-bottom border-infor'>
        <img src={userData.profilePic || PROF} alt="profile" className='img'/>
        <p>{userData.username}</p>
        </div>

        <div className='msg pt-2'>
        <p className='msg-send'>Hellow</p>
        <p className='msg-receive'>Hellow 2</p>

        {messages.map((msg)=>(
           <div className={msg.senderId === currentUserId ? `msg-send` : `msg-receive`}>
            <p>{msg.text}</p>
            <span>1 min ago</span>
           </div>
        ))}
 
        </div>
        
        <div className='d-flex align-items-center'>
        <Button>+</Button>
        <Form.Group
        style={{width:"70%"}}
        >
            <Form.Control
            type="text"

            ></Form.Control>
        </Form.Group>
        <>0</>
        <Button>send</Button>
        </div>
    </div>
  )
}
