import React from 'react'
import { useEffect } from 'react'
import PROF from "../assets/cover.jpg"
import axios from "axios"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../redux/actions/userActions'
import { BASE_URL } from '../redux/actions/base'
import { useRef } from 'react'


export default function Conversation({chat,currentUserId,token,onlineUsers}) {
  const [userData,setUserData]=useState({});
  let online=useRef();
  
  //online users
  useEffect(()=>{
    const userId=chat.members.filter((id)=>id!==currentUserId);
     online.current=onlineUsers.some((user)=>user.userId ===userId[0]);
  },[onlineUsers,chat])

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
  },[])
  
  return (
    <div>
        <div className='d-flex align-items-center border-bottom border-infor'>
            <img src={userData.profilePic || PROF} alt="profile" className='img'/>
            <div className='chat-user'>
                <p>{userData?.username}</p>
                <p className={online.current? "status-online" : "status"} >{online.current ? "online" : "offline"}</p>
            </div>                 
        </div>             
    </div>
  )
}
