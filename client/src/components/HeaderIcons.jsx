import React from 'react';
import {MdOutlineNotificationsNone,MdOutlineSettings} from "react-icons/md"
import {BiMessageDots,BiHome} from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import {getPosts} from "../redux/actions/postsActions"


const HeaderIcons = (props) => {
    const dispatch=useDispatch();
    const {userInfor}=useSelector((state)=>state.login);

    const handleHome=()=>{

        dispatch(getPosts(userInfor?.user._id));  
        props.setShowProfileD(false)
    }
    return (
        <div>
            <div className='d-flex mx-3 justify-content-around'>
            <p>
                <BiHome color='orange' className='icon' size={25} onClick={handleHome}/>                
            </p>
            <p>
                <MdOutlineSettings size={25}/>                
            </p>
            <p>
                <MdOutlineNotificationsNone size={25}/>                
            </p>
            <p>
                <BiMessageDots size={25}/>                
            </p>      
           </div>
        </div>
    );
}

export default HeaderIcons;
