import React from 'react';
import {MdOutlineNotificationsNone,MdOutlineSettings} from "react-icons/md"
import {BiMessageDots,BiMessageRoundedAdd} from "react-icons/bi"

const HeaderIcons = () => {
    return (
        <div>
            <div className='d-flex mx-3 justify-content-around'>
            <p>
                <BiMessageRoundedAdd size={25}/>                
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
