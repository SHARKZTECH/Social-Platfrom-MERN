import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import {MdEdit} from "react-icons/md"
import {useSelector,useDispatch} from "react-redux";
import {getUserAction} from "../redux/actions/userActions"


const ProfileDetails = (props) => {
    const dispatch=useDispatch();
    const handleClickEdit=()=>{
        props.setEditModalShow(true);
    }
    const handleLogout=()=>{
        props.setShowProfileD(false);
    }
    const {userInfor}=useSelector((state)=>state.login);
    const {user}=useSelector((state)=>state.user);
    //  console.log(user);
    useEffect(()=>{
        dispatch(getUserAction(userInfor?.user._id));
    },[userInfor,dispatch])

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
                    <p>Status: {user?.relationship}</p>
                    <p>Lives In: {user?.livesin}</p>
                    <p>Works at: {user?.worksAt}</p>

                    <Button className='login-btn' onClick={handleLogout}>Logout</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProfileDetails;
