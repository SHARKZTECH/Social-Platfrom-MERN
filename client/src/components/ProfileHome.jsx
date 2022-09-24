import React from 'react';
import COVER from "../assets/cover.jpg"
import { Card,Row,Col } from 'react-bootstrap';


const ProfileHome = () => {
    return (
        <div>
            <Card className='mt-1' style={{position:"relative",width:"",display:""}}>
              <Card.Img src={COVER} alt="cover"  fluid bsPrefix='card-img1'/>
              <Card.Img src={COVER} alt="profile"  fluid bsPrefix='card-img2'/>
              <Card.Body>
                <Card.Text>
                    <h6 className='text-center'>Sharkz Reigns</h6>
                    <p className='text-center'>Coder</p>
                    <Row className='border-bottom border-top'>
                        <Col sm={6}>
                            <div  className="border-end">
                           <p>1</p>
                           <p>Followers</p>
                           </div>
                        </Col>
                        <Col >
                            <p>2</p>
                            <p>Following</p>
                        </Col>
                    </Row>
                    <p className='text-center mt-2 mb-0'>My Profile</p>
                </Card.Text>
              </Card.Body>
           </Card>   
        </div>
    );
}

export default ProfileHome;
