import React from 'react';
import { Card } from 'react-bootstrap';
import COVER from "../assets/cover.jpg";
import {BiMessageDots} from "react-icons/bi";
import {FaShareSquare} from "react-icons/fa"
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import FlipMove from "react-flip-move";
import {useSelector,useDispatch} from "react-redux"
import {getPosts} from "../redux/actions/postsActions"
import { useEffect } from 'react';

const Feeds = () => {
  const dispatch=useDispatch();

  const {userInfor}=useSelector((state)=>state.login);
  const {user,success:successUser}=useSelector((state)=>state.user);
  const {posts,loading}=useSelector((state)=>state.posts);


  useEffect(()=>{
    dispatch(getPosts(userInfor?.user._id));
  },[])

    return (
      <div className="feeds">
        {loading && (<p>loading...</p>)}
        {!loading && (
      <FlipMove>
      {posts?.map((post) => ( 
       <Card className='mt-2'>
         <Card.Img src={''} alt="img" fluid bsPrefix='card-img3'/>
         <Card.Body className='p-2'>
           <div className='d-flex'>
           <p className='me-2' >
           <FcLikePlaceholder size={25}/>
           </p>
           <p className='me-2'>
           <BiMessageDots size={25}/>
           </p>
           <p>
           <FaShareSquare size={25}/>
           </p>
           </div>
           <p className='mb-0'>{post?.likes.length} likes</p>
           <p>{post.desc}</p>
         </Card.Body>
       </Card>
      ))}
      </FlipMove>
      )}
      </div>
    );
}

export default Feeds;
