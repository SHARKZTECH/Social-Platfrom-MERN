import React, { useState } from 'react';
import {  Col ,Row, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import SearchBox from './SearchBox';
import TWITTER from "../assets/logo1.png"
import Feeds from './Feeds';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import CreatePost from './CreatePost';
import CreatePostModal from './CreatePostModal';
import EditDetailsModal from './EditDetailsModal';
import ProfileHome from './ProfileHome';
import Trends from './Trends';
import HeaderIcons from './HeaderIcons';
import PeopleUKnow from './PeopleUKnow';
import {getPosts} from "../redux/actions/postsActions"
import EditPostModal from './EditPostModal';


const Home = () => {
   const dispatch=useDispatch();
    const [modalShow,setModalShow]=useState(false);
    const [editmodalShow,setEditModalShow]=useState(false);
    const [postEditModalShow,setPostEditModalShow]=useState(false);
    const [postId,setPostId]=useState(null);
    const [showProfileD,setShowProfileD]=useState(false);

    const {userInfor}=useSelector((state)=>state.login);

    const handleHome=()=>{
      dispatch(getPosts(userInfor?.user._id));  
      setShowProfileD(false)
  }

    return (
     <Row>

        <Col>
           <div className='d-flex align-items-center'>
               <div className='me-1'>
                 <img src={TWITTER} alt='img' width={60} onClick={handleHome} className="icon"/>
               </div>
               <div>
                  <SearchBox/>
               </div>
           </div>
           <ProfileDetails setEditModalShow={setEditModalShow} setShowProfileD={setShowProfileD} showProfileD={showProfileD}/>
           <ProfileHome showProfileD={showProfileD} setShowProfileD={setShowProfileD}/>
           <PeopleUKnow/>
        </Col>
        
        <Col className='mt-2 mid'>
            <Profile showProfileD={showProfileD}/>
            <EditDetailsModal 
            show={editmodalShow}
            onHide={()=>setEditModalShow(false)}
            />
            <EditPostModal
            show={postEditModalShow}
            onHide={()=>setPostEditModalShow(false)}
            postId={postId}
            />
            <CreatePostModal
            show={modalShow} 
            onHide={()=>setModalShow(false)}
            />
             <CreatePost gap={2}/>
            <Feeds showProfileD={showProfileD} setPostEditModalShow={setPostEditModalShow} setPostId={setPostId}/>         
        </Col>
      
        <Col className='mt-3'>
        <HeaderIcons setShowProfileD={setShowProfileD}/>
          <Trends/>
           <div className='d-grid'>
              <Button className='mt-3' onClick={()=>setModalShow(true)}>Share</Button> 
              </div>         
        </Col>
     </Row>
    );
}

export default Home;
 