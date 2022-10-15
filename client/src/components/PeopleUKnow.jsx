import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from "react-redux";
import {getUsersAction} from "../redux/actions/userActions"
import User from './User';


const PeopleUKnow = () => {
    const dispatch=useDispatch();
    const {userInfor}=useSelector((state)=>state.login);
    const {users,loading,success}=useSelector((state)=>state.users);

    useEffect(()=>{
        if(userInfor){
            dispatch(getUsersAction()); 
        }        
    },[])

    return (
        <div>        
           <div className='mt-3'>
                 <h5>People you may know</h5>
                 {loading && (<p>Loading...</p>)}                        
                {!loading &&(
                 <div className='pple'>
                 {users?.map((user) => ( 
                    user._id===userInfor?.user._id ? "" :
                    <div key={user._id}>
                        <User user={user}/>
                    </div>        
                 ))}
                 </div>
           )}
           </div>
        </div>
    );
}

export default PeopleUKnow;
