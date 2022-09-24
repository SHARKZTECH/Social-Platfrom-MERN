import React, { useState } from 'react';
import {  Col ,Row, Button} from 'react-bootstrap';
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

const Home = () => {
    const [modalShow,setModalShow]=useState(false);
    const [editmodalShow,setEditModalShow]=useState(false);

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
           <ProfileDetails setEditModalShow={setEditModalShow}  />
           <ProfileHome/>
           <PeopleUKnow/>
        </Col>
        
        <Col className='mt-2'>
            <Profile/>
            <EditDetailsModal 
            show={editmodalShow}
            onHide={()=>setEditModalShow(false)}
            />
            <CreatePostModal
            show={modalShow} 
            onHide={()=>setModalShow(false)}
            />
             <CreatePost gap={3}/>
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
 