import React from 'react';
import {MdOutlineNotificationsNone,MdOutlineSettings} from "react-icons/md"
import {BiMessageDots,BiHome} from "react-icons/bi"

const HeaderIcons = (props) => {
    return (
        <div>
            <div className='d-flex mx-3 justify-content-around'>
            <p>
                <BiHome color='orange' className='icon' size={25} onClick={()=>props.setShowProfileD(false)}/>                
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
