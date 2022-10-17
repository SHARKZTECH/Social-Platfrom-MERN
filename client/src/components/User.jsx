import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import COVER from "../assets/cover.jpg";
import {followUserAction,unFollowUserAction,getUserAction} from "../redux/actions/userActions"


const User = ({user}) => {
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

    return (
        <div className='d-flex align-items-center mb-1 flex-wrap' key={user._id}>
         <div className='d-flex'>   
        <img src={COVER} className="img" alt="img" />
        <div className='me-4' style={{minWidth:"300px"}}>
            <p className='m-0 p-0'>{user.firstname}</p>
            <p className='m-0 p-0'>{user.username}</p>
        </div>
        </div>
        <div >
        {followed ? (
            <Button size='sm' onClick={()=>handleUnFollow(user._id)}>UnFollow</Button>
        ):(
            <Button size='sm' onClick={()=>handleFollow(user._id)}>Follow</Button>
        )                    
        }
        </div>
     </div>  
    );
}

export default User;
