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
        "desc":"",
        "image":""
    })
    
    const handleChange=(e)=>{
       let file=e.target.files[0];
       let reader=new FileReader();
       reader.readAsDataURL(file);

       reader.onload=(e)=>{

        let fileInfo={
            name: file.name,
            type: file.type,
            size: Math.round(file.size / 1000) + ' kB',
            base64: reader.result,
            file: file,
        }
        setPostData({...postData,image:fileInfo.base64})
       } 
    }
    const {userInfor}=useSelector((state)=>state.login);
   
    const userId=userInfor?.user._id;

    // useEffect(()=>{     
    //     setPostData({...postData,userId:userInfor?.user._id});       
    // },[userInfor])
    const handleSubmit=()=>{
        if(userId){
            if(postData.desc){
               dispatch(createPost({userId,...postData}));
               setPostData({
                 "desc":"",
                "image":""});
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
                        <img src={userInfor?.user.profilePic || COVER} alt="img" className='img'/>
                    </div>
                    <div>
                    <Form.Group className='frm-group'>
                    <Form.Control
                    type="text"
                    name="q"
                    className='frm-control'
                    placeholder='What`s hapening ?'
                    onChange={(e)=>setPostData({...postData,desc:e.target.value})}
                    value={postData.desc}
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
                    {postData.image &&(
                        <>
                        <Button onClick={()=>setPostData({...postData,image:""})}>X</Button>
                        <img src={postData?.image} alt="post" style={{width:"350px",height:"300px",objectFit:'cover'}}/>
                        </>
                    )}
                </div>
            </Card>  
    );
}

export default CreatePost;
