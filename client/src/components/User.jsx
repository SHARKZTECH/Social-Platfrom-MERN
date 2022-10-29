import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import COVER from "../assets/cover.jpg";
import {followUserAction,unFollowUserAction,getUserAction} from "../redux/actions/userActions"
import {BiMessageDots} from "react-icons/bi"
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import { BASE_URL } from '../redux/actions/base';

const User = ({user}) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    let {userInfor}=useSelector((state)=>state.login);

    const [followed,setFollowed]=useState(user?.followers.includes(userInfor?.user._id));

   
    const newUser={
        "currentUserId":userInfor?.user._id
    }

    const handleFollow=(id)=>{
           dispatch(followUserAction(id,newUser));
           setFollowed(true);
    }
    const handleUnFollow=(id)=>{
          dispatch(unFollowUserAction(id,newUser));
          setFollowed(false);
      }

      const handleChat=async(id)=>{
        const newChat={
            "senderId":userInfor.user._id,
            "receiverId":id
        }
         try{
             const {data}=await axios.post(`${BASE_URL}/api/chat`,newChat);
             console.log(data)            
         }catch(err){
            console.log(err.message)
         }
        
        navigate("/chat")
    }  
    return (
        <div className='d-flex align-items-center mb-1 flex-wrap' key={user._id}>
         <div className='d-flex'>   
        <img src={COVER} className="img" alt="img" />
        <div className='me-4' style={{minWidth:"120px"}}>
            <p className='m-0 p-0'>{user.firstname} </p>
            <p className='m-0 p-0'>{user.username}</p>
        </div>
        </div>
        <div >
         <BiMessageDots
          color='orange' onClick={()=>handleChat(user._id)}
           size={25} className="icon"
           style={{marginRight:".5rem"}}
           />                
        {followed ? (
            <Button size='sm'
             onClick={()=>handleUnFollow(user._id)}
             style={{width:"80px"}}
             >UnFollow</Button>
        ):(
            <Button size='sm' 
            onClick={()=>handleFollow(user._id)}
            style={{width:"80px"}}
            >Follow</Button>
        )                    
        }
        </div>
     </div>  
    );
}

export default User;
