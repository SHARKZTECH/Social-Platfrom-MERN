import React from 'react';
import {MdOutlineNotificationsNone,MdOutlineSettings} from "react-icons/md"
import {BiMessageDots,BiHome} from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import {getPosts} from "../redux/actions/postsActions"
import {useNavigate} from "react-router-dom"

const HeaderIcons = (props) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {userInfor}=useSelector((state)=>state.login);

    const handleHome=()=>{
        if(props.chat){
            navigate("/home")
        }else{
            dispatch(getPosts(userInfor?.user._id));  
            props.setShowProfileD(false)
        }
       
    }

    const handleChat=()=>{
        navigate("/chat")
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
                <BiMessageDots color='orange' onClick={handleChat} size={25} className="icon"/>                
            </p>      
           </div>
        </div>
    );
}

export default HeaderIcons;
