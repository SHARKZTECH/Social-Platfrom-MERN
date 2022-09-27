import React from 'react';
import { Card,Row,Col } from 'react-bootstrap';
import COVER from "../assets/cover.jpg"
import {useSelector} from "react-redux";

const Profile = (props) => {
    const {userInfor}=useSelector((state)=>state.login);
    const {user}=useSelector((state)=>state.user);


    return (
        <div className={props.showProfileD ? 'show' : 'hide'}>
              <Card className='mt-1 mb-2' style={{position:"relative",width:""}}>
              <Card.Img src={user?.coverPic ||COVER} alt="cover"  fluid bsPrefix='card-img1'/>
              <Card.Img src={user?.profilePic || COVER} alt="profile"  fluid bsPrefix='card-img2'/>
              <Card.Body>
                <Card.Text>
                    <h6 className='text-center'>
                    {user?.firstname[0].toUpperCase()+user?.firstname.substring(1)}                       
                         {" "+user?.lastname}
                    </h6>
                    <p className='text-center'>{user?.about}</p>
                    <Row className='border-bottom border-top'>
                        <Col sm={4}>
                            <div  className="border-end">
                           <p>{user?.followers.length > 0 ? user?.followers.length : 0}</p>
                           <p>Followers</p>
                           </div>
                        </Col>
                        <Col >
                           <div className="border-end">
                            <p>{user?.following.length > 0 ? user?.following.length : 0}</p>
                            <p>Following</p>
                            </div>
                        </Col>
                        <Col >
                            <p>2</p>
                            <p>Posts</p>
                        </Col>
                    </Row>
                </Card.Text>
              </Card.Body>
           </Card> 
        </div>
    );
}

export default Profile;
