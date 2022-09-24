import React from 'react';
import { Card,Row,Col } from 'react-bootstrap';
import COVER from "../assets/cover.jpg"

const Profile = () => {
    return (
        <div style={{display:"none"}}>
              <Card className='mt-1 mb-2' style={{position:"relative",width:""}}>
              <Card.Img src={COVER} alt="cover"  fluid bsPrefix='card-img1'/>
              <Card.Img src={COVER} alt="profile"  fluid bsPrefix='card-img2'/>
              <Card.Body>
                <Card.Text>
                    <h6 className='text-center'>Sharkz Reigns</h6>
                    <p className='text-center'>Coder</p>
                    <Row className='border-bottom border-top'>
                        <Col sm={4}>
                            <div  className="border-end">
                           <p>1</p>
                           <p>Followers</p>
                           </div>
                        </Col>
                        <Col >
                           <div className="border-end">
                            <p>2</p>
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
