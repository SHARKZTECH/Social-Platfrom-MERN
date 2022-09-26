import React from 'react';
import COVER from "../assets/cover.jpg"
import { Card,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import {useSelector} from "react-redux";


const ProfileHome = ({setShowProfileD,showProfileD}) => {
    const handleProfile=()=>{
        setShowProfileD(true);
    }

    const {userInfor}=useSelector((state)=>state.login);

    return (
        <div className={showProfileD ? 'hide' : 'show'}>
            <Card className='mt-1' style={{position:"relative",width:"",display:""}}>
              <Card.Img src={userInfor?.user.coverPic ||COVER} alt="cover"  fluid bsPrefix='card-img1'/>
              <Card.Img src={userInfor?.user.profilePic || COVER} alt="profile"  fluid bsPrefix='card-img2'/>
              <Card.Body>
                <Card.Text>
                    <h6 className='text-center'>
                        {userInfor?.user.firstname[0].toUpperCase()+userInfor?.user.firstname.substring(1)}                       
                         {" "+userInfor?.user.lastname}
                    </h6>
                    <p className='text-center'>{userInfor?.user.about}</p>
                    <Row className='border-bottom border-top'>
                        <Col sm={6}>
                            <div  className="border-end">
                           <p>{userInfor?.user.followers.length > 0 ? userInfor?.user.followers.length : 0}</p>
                           <p>Followers</p>
                           </div>
                        </Col>
                        <Col >
                            <p>{userInfor?.user.following.length > 0 ? userInfor?.user.following.length : 0}</p>
                            <p>Following</p>
                        </Col>
                    </Row>
                    <div className="d-flex align-items-center flex-column" >
                    <p className='text-center mt-2 mb-0 btn'  style={{color:"yellow",fontStyle:"italic"}} onClick={handleProfile} >My Profile</p>
                    </div>
                </Card.Text>
              </Card.Body>
           </Card>   
        </div>
    );
}

export default ProfileHome;
