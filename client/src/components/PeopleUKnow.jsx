import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import COVER from "../assets/cover.jpg";
import {useSelector,useDispatch} from "react-redux";
import {getUsersAction,followUserAction,unFollowUserAction,getUserAction} from "../redux/actions/userActions"


const PeopleUKnow = () => {
    const [filteredUsers,setFiltedUsers]=useState([]);
    const dispatch=useDispatch();
    const {userInfor}=useSelector((state)=>state.login);
    const {users,loading,success}=useSelector((state)=>state.users);
    
    const newUser={
        "currentUserId":userInfor?.user._id
    }

    const handleFollow=(id)=>{
           dispatch(followUserAction(id,newUser));
        //    dispatch(getUserAction(userInfor?.user._id));
    }
    const handleUnFollow=(id)=>{
          dispatch(unFollowUserAction(id,newUser));
            }
    useEffect(()=>{
        if(userInfor){
            // dispatch(getUsersAction()); 
        }
        if(success){
            setFiltedUsers(users.filter((user)=>user._id!==userInfor?.user._id));
        }   
         },[success])

    return (
        <div>        
           <div className='mt-3'>
                 <h5>People you may know</h5>
                 {loading && (<p>Loading...</p>)}                        
                {!loading &&(
                 <div className='pple'>
                 {filteredUsers?.map((user) => ( 
                 <div className='d-flex align-items-center mb-1'>
                    <img src={COVER} className="img" alt="img" />
                    <div className='me-4'>
                        <p className='m-0 p-0'>{user.firstname}</p>
                        <p className='m-0 p-0'>{user.username}</p>
                    </div>
                    {user?.followers.includes(userInfor?.user._id) ? (
                        <Button size='sm' onClick={()=>handleUnFollow(user._id)}>UnFollow</Button>
                    ):(
                        <Button size='sm' onClick={()=>handleFollow(user._id)}>Follow</Button>
                    )
                    
                    }
                 </div>          
                 ))}
                 </div>
           )}
           </div>
        </div>
    );
}

export default PeopleUKnow;
