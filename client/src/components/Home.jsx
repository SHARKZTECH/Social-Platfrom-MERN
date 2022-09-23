import React from 'react';
import { Card, Col ,Row,Form, Button} from 'react-bootstrap';
import SearchBox from './SearchBox';
import COVER from "../assets/cover.jpg"
import TWITTER from "../assets/twitter.png"

import 
{MdInsertPhoto,MdSlowMotionVideo,MdLocationOn,
    MdOutlineNotificationsNone,MdOutlineSettings} 
from "react-icons/md"
import {RiCalendarTodoFill} from "react-icons/ri"
import {BiMessageDots,BiMessageRoundedAdd} from "react-icons/bi"
import Feeds from './Feeds';
const Home = () => {
    return (
     <Row>

        <Col>
           <div className='d-flex align-items-center'>
               <div>
                 <img src={TWITTER} alt='img' width={40} />
               </div>
               <div>
                  <SearchBox/>
               </div>
           </div>
           <Card className='mt-1' style={{position:"relative",width:""}}>
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
           <div className='mt-3'>
                 <h5>People you may know</h5>
                 {Array.from({ length: 4 }).map((_, idx) => ( 
                 <div className='d-flex align-items-center mb-1'>
                    <img src={COVER} className="img" alt="img" />
                    <div className='me-4'>
                        <p className='m-0 p-0'>Sharkz</p>
                        <p className='m-0 p-0'>sharkz@gmail.com</p>
                    </div>
                    <Button>Follow</Button>
                 </div>          
                 ))}
           </div>
        </Col>
        
        <Col className='mt-2'>
        <Card className='p-1'>
                <div className='d-flex'>
                    <div>
                        <img src={COVER} alt="img" className='img'/>
                    </div>
                    <div>
                    <Form.Control
                    type="text"
                    name="q"
                    className="mr-sm ml-sm-3"
                    ></Form.Control>
                    </div>
                </div>
                <div className='d-flex gap-4 mx-3'>
                    <p className='d-flex align-items-center'>
                        <MdInsertPhoto/>
                        Photo
                    </p>
                    <p className='d-flex align-items-center'>
                        <MdSlowMotionVideo/>
                        Video
                    </p>
                    <p className='d-flex align-items-center'>
                        <MdLocationOn/>
                        Location
                    </p>
                    <p className='d-flex align-items-center'>
                        <RiCalendarTodoFill/>
                        Shedule
                    </p>
                  
                    <Button>Share</Button>
                </div>
            </Card>  

            <Feeds/>         
        </Col>
      
        <Col className='mt-3'>
          <div className='d-flex gap-4 mx-3'>
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

           <Card className='p-3'>
              <h3>Trends For You</h3> 
              <div>
                  <h5>#Minions</h5>
                  <p>97k shares</p>
              </div>    
              <div>
                  <h5>#Avegers</h5>
                  <p>80.5k shares</p>
              </div>   
              <div>
                  <h5>#ZainKeepcode</h5>
                  <p>72k shares</p>
              </div>   
              <div>
                  <h5>#Need For Speed</h5>
                  <p>27k shares</p>
              </div>  
           </Card>
           <div className='d-grid'>
              <Button className='mt-3'>Share</Button> 
              </div>         
        </Col>
     </Row>
    );
}

export default Home;
