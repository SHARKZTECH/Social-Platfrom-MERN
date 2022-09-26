import React, { useState } from 'react';
import {  Col ,Row, Button} from 'react-bootstrap';
import {useSelector} from "react-redux";
import SearchBox from './SearchBox';
import TWITTER from "../assets/twitter.png"
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
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
   const navigate=useNavigate();
    const [modalShow,setModalShow]=useState(false);
    const [editmodalShow,setEditModalShow]=useState(false);
    const [showProfileD,setShowProfileD]=useState(false);

    const {userInfor}=useSelector((state)=>state.login);

   //  useEffect(()=>{
   //    if(!userInfor){
   //       navigate("/login");
   //    }
   //  },[userInfor])

       console.log(userInfor?.user)
    return (
     <Row>

        <Col>
           <div className='d-flex align-items-center'>
               <div className='me-1'>
                 <img src={TWITTER} alt='img' width={40} />
               </div>
               <div>
                  <SearchBox/>
               </div>
           </div>
           <ProfileDetails setEditModalShow={setEditModalShow} setShowProfileD={setShowProfileD} showProfileD={showProfileD}/>
           <ProfileHome showProfileD={showProfileD} setShowProfileD={setShowProfileD}/>
           <PeopleUKnow/>
        </Col>
        
        <Col className='mt-2'>
            <Profile showProfileD={showProfileD}/>
            <EditDetailsModal 
            show={editmodalShow}
            onHide={()=>setEditModalShow(false)}
            />
            <CreatePostModal
            show={modalShow} 
            onHide={()=>setModalShow(false)}
            />
             <CreatePost gap={2}/>
            <Feeds/>         
        </Col>
      
        <Col className='mt-3'>
        <HeaderIcons/>
          <Trends/>
           <div className='d-grid'>
              <Button className='mt-3' onClick={()=>setModalShow(true)}>Share</Button> 
              </div>         
        </Col>
     </Row>
    );
}

export default Home;
 