import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {MdEdit} from "react-icons/md"
import {useDispatch, useSelector} from "react-redux";
import {USER_LOGOUT} from "../redux/constants/usercontants"


const ProfileDetails = (props) => {
    const dispatch=useDispatch();
    const handleClickEdit=()=>{
        props.setEditModalShow(true);
    }
    const handleLogout=()=>{
        dispatch({type:USER_LOGOUT});
        window.localStorage.clear();
        // props.setShowProfileD(false);
    }
    const {userInfor}=useSelector((state)=>state.login);
 

    return (
        <div className={props.showProfileD ? 'show' : 'hide'}>
            <Card style={{position:"relative"}} className="p-2 mt-2">
                <Card.Body>
                    <div>
                        <h6>Profile Infor</h6>
                        <p className='edit-icon'>
                        <MdEdit  size={20}
                        onClick={handleClickEdit}
                        />
                        </p>
                    </div>
                    <p>Status: {userInfor?.user.relationship}</p>
                    <p>Lives In: {userInfor?.user.livesin}</p>
                    <p>Works at: {userInfor?.user.worksAt}</p>

                    <Button className='login-btn' onClick={handleLogout}>Logout</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProfileDetails;
