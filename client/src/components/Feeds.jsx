import React from 'react';
import { Card } from 'react-bootstrap';
import COVER from "../assets/cover.jpg";
import {BiMessageDots} from "react-icons/bi";
import {FaShareSquare} from "react-icons/fa"
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import FlipMove from "react-flip-move";
import {useSelector,useDispatch} from "react-redux"
import {getPosts,likePost} from "../redux/actions/postsActions"
import { useEffect } from 'react';
import {AiFillDelete} from "react-icons/ai";
import {MdEdit} from "react-icons/md"


const Feeds = () => {
  const dispatch=useDispatch();

  const {userInfor}=useSelector((state)=>state.login);
  const {user,success:successUser}=useSelector((state)=>state.user);
  const {posts,loading}=useSelector((state)=>state.posts);
  const body={"userId":userInfor?.user._id}


  const handleLike=(id)=>{
    dispatch(likePost(id,body))
    dispatch(getPosts(userInfor?.user._id));

  }
  const handleDelete=(id)=>{
     alert("del"+id)
  }
  const handleEdit=(id)=>{
    alert('edit'+id)
  }
  useEffect(()=>{
    dispatch(getPosts(userInfor?.user._id));
  },[dispatch])

    return (
      <div className="feeds">
        {loading && (<p>loading...</p>)}
        {!loading && (
      <FlipMove>
      {posts?.map((post) => ( 
        post.image ? (
       <Card className='mt-2'>
         <Card.Img src={post.image} alt="img" fluid bsPrefix='card-img3'/>
         <Card.Body className='p-2'>
           <div className='d-flex'>
           <p className='me-2' >
           {post.likes.includes(userInfor?.user._id) ?(<FcLike size={25} onClick={()=>handleLike(post._id)}/>) : (<FcLikePlaceholder onClick={()=>handleLike(post._id)} size={25}/>)}        
           </p>
           <p className='me-2'>
           <BiMessageDots size={25}/>
           </p>
           <p>
           <FaShareSquare size={25}/>
           </p>
           {post.userId === userInfor?.user._id && (
           <div className='d-flex gap-1 ms-auto p-2'>
               <p><AiFillDelete color='orange' size={25} onClick={()=>handleDelete(post._id)}/></p>
               <p><MdEdit size={25} onClick={()=>handleEdit(post._id)}/></p>
           </div>
           )}
           </div>
           <p className='mb-0'>{post?.likes.length} likes</p>
           <p>{post.desc}</p>
         </Card.Body>
       </Card>
       ) : (
        <Card className='mt-2'>
        <Card.Body className='p-2'>
        <p>{post.desc}</p>

          <div className='d-flex'>
          <p className='me-2' >
            {post.likes.includes(userInfor?.user._id) ?(<FcLike size={25} onClick={()=>handleLike(post._id)}/>) : (<FcLikePlaceholder onClick={()=>handleLike(post._id)}  size={25}/>)}        
          
          </p>
          <p className='me-2'>
          <BiMessageDots size={25}/>
          </p>
          <p>
          <FaShareSquare size={25}/>
          </p>
          {post.userId === userInfor?.user._id && (
           <div className='d-flex gap-1 ms-auto p-2'>
               <p><AiFillDelete color='orange' size={25} onClick={()=>handleDelete(post._id)}/></p>
               <p><MdEdit size={25} onClick={()=>handleEdit(post._id)}/></p>
           </div>
           )}
          </div>
          <p className='mb-0'>{post?.likes.length} likes</p>
        </Card.Body>
      </Card>
       )
      ))}
      </FlipMove>
      )}
      </div>
    );
}

export default Feeds;
