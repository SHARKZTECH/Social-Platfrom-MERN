import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {MdEdit} from "react-icons/md"

const ProfileDetails = (props) => {
    const handleClickEdit=()=>{
        props.setEditModalShow(true);
    }
    return (
        <div style={{display:"none"}}>
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
                    <p>Status: Single</p>
                    <p>Lives In: New York</p>
                    <p>Works at: Amazon</p>

                    <Button className='login-btn'>Logout</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProfileDetails;
