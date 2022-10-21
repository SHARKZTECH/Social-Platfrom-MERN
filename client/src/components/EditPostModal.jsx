import React, { useState ,useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import { Card,Form ,Button} from 'react-bootstrap';
import 
{MdInsertPhoto,MdSlowMotionVideo,MdLocationOn,} 
from "react-icons/md"
import {RiCalendarTodoFill} from "react-icons/ri"
import COVER from "../assets/cover.jpg"
import { useSelector,useDispatch } from 'react-redux';
import {getPost, updatePost} from "../redux/actions/postsActions"

const EditPostModal = (props) => {
     const dispatch=useDispatch();
    const [postData,setPostData]=useState({
        "desc":"",
        "image":""
    })

    const handleUpadateChange=(e)=>{
       let file=e.target.files[0];
       let reader=new FileReader();
       reader.readAsDataURL(file);
       reader.onload=(e)=>{
        setPostData({...postData,image:e.target.result})
       } 
     }
   
    const {userInfor}=useSelector((state)=>state.login);  
    const {post,loading}=useSelector((state)=>state.post); 
    const userId=userInfor?.user._id;

    const handleSubmit=()=>{
        if(userId){
            dispatch(updatePost(props.id,{userId,...postData}));
            props.setShow(false);
        }
    }

    useEffect(()=>{
            setPostData({
                "desc":post?.desc,
                "image":post?.image
            })
        
    },[post]);

    return (
        <>
            {props.show && (
                <Modal {...props}>                    
                    <Modal.Header closeButton></Modal.Header>
                
                 {loading ? 'loadind...' : ( 
                    <Modal.Body>
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
                            <input type="file" id="file" onChange={handleUpadateChange}/>
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
                    <Button size='sm' style={{marginTop:"-15px"}} onClick={handleSubmit}>Update</Button>
                    
                         {postData?.image &&(
                            <>
                              <Button onClick={()=>setPostData({...postData,image:""})}>X</Button>
                              <img src={postData?.image} alt="post" style={{width:"350px"}}/>
                            </>
                         )}

                </div>
            </Card>
                    </Modal.Body>)}
                </Modal>
            )}
        </>
    );
}

export default EditPostModal;
