import React from 'react';
import { Card,Form ,Button} from 'react-bootstrap';
import 
{MdInsertPhoto,MdSlowMotionVideo,MdLocationOn,} 
from "react-icons/md"
import {RiCalendarTodoFill} from "react-icons/ri"
import COVER from "../assets/cover.jpg"
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import {createPost} from "../redux/actions/postsActions"
import { useEffect } from 'react';


const CreatePost = (props) => {
    const dispatch=useDispatch();
    const [postData,setPostData]=useState({
        "userId":"",
        "desc":"",
        "image":""
    })
    const handleChange=(e)=>{
       let file=e.target.files[0];
       let reader=new FileReader();
       reader.readAsDataURL(file);
       reader.onload=(e)=>{
        setPostData({...postData,image:e.target.result})
       } 
    }
    const {userInfor}=useSelector((state)=>state.login);
    const {user,success:successUser}=useSelector((state)=>state.user);
    // setPostData({...postData,userId:user?._id});

    // useEffect(()=>{     
    //     setPostData({...postData,userId:user?._id});       
    // },[])

    const handleSubmit=()=>{
        if(postData.userId){
            if(postData.desc){
               dispatch(createPost(postData));
            }else{
                alert("fill in ...");
            }
        }else{
            alert("Opps! an error occured try again");
        }
    }

    return (
        <Card className='p-1'>
                <div className='d-flex align-items-center'>
                    <div> 
                        <img src={user?.profilePic || COVER} alt="img" className='img'/>
                    </div>
                    <div>
                    <Form.Group className='frm-group'>
                    <Form.Control
                    type="text"
                    name="q"
                    className='frm-control'
                    placeholder='What`s hapening ?'
                    onChange={(e)=>setPostData({desc:e.target.value})}
                    ></Form.Control>
                    </Form.Group>
                    </div>
                </div>
                <div className={`d-flex gap-${props.gap} mx-3 align-items-center flex-wrap`}>
                    <p className='d-flex align-items-center'>
                        <div className='file_upload'>
                            <label htmlFor='file'> 
                                <MdInsertPhoto/>
                            </label>
                            <input type="file" id="file" onChange={handleChange}/>
                        </div>
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
                    <Button size='sm' style={{marginTop:"-15px"}} onClick={handleSubmit}>Share</Button>
                </div>
            </Card>  
    );
}

export default CreatePost;
