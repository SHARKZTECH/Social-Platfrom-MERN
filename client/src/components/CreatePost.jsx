import React from 'react';
import { Card,Form ,Button} from 'react-bootstrap';
import 
{MdInsertPhoto,MdSlowMotionVideo,MdLocationOn,
    MdOutlineNotificationsNone,MdOutlineSettings} 
from "react-icons/md"
import {RiCalendarTodoFill} from "react-icons/ri"
import {BiMessageDots,BiMessageRoundedAdd} from "react-icons/bi"
import COVER from "../assets/cover.jpg"
import TWITTER from "../assets/twitter.png"

const CreatePost = (props) => {
    return (
        <Card className='p-1'>
                <div className='d-flex align-items-center'>
                    <div> 
                        <img src={COVER} alt="img" className='img'/>
                    </div>
                    <div>
                    <Form.Group className='frm-group'>
                    <Form.Control
                    type="text"
                    name="q"
                    className='frm-control'
                    placeholder='What`s hapening ?'
                    ></Form.Control>
                    </Form.Group>
                    </div>
                </div>
                <div className={`d-flex gap-${props.gap} mx-3 align-items-center flex-wrap`}>
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
                    <Button size='sm' style={{marginTop:"-15px"}}>Share</Button>
                </div>
            </Card>  
    );
}

export default CreatePost;
