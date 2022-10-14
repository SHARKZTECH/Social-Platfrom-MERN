import React from 'react';
import { Card,Row,Col } from 'react-bootstrap';
import COVER from "../assets/cover.jpg"
import {useSelector} from "react-redux";

const Profile = (props) => {
    const {userInfor}=useSelector((state)=>state.login);
    const {posts}=useSelector((state)=>state.posts);


    return (
        <div className={props.showProfileD ? 'show' : 'hide'}>
              <Card className='mt-1 mb-2' style={{position:"relative",width:""}}>
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
                        <Col sm={4}>
                            <div  className="border-end">
                           <p>{userInfor?.user.followers.length > 0 ? userInfor?.user.followers.length : 0}</p>
                           <p>Followers</p>
                           </div>
                        </Col>
                        <Col >
                           <div className="border-end">
                            <p>{userInfor?.user.following.length > 0 ? userInfor?.user.following.length : 0}</p>
                            <p>Following</p>
                            </div>
                        </Col>
                        <Col >
                            <p>{posts?.filter((post)=> post.userId === userInfor?.user._id).length}</p>
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
