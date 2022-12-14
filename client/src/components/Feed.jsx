import React from 'react';
import { Card } from 'react-bootstrap';
import {BiMessageDots} from "react-icons/bi";
import {FaShareSquare} from "react-icons/fa"
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import {useSelector,useDispatch} from "react-redux"
import {deletePost, getPosts,likePost} from "../redux/actions/postsActions"
import {AiFillDelete} from "react-icons/ai";
import {MdEdit} from "react-icons/md"
import { useState } from 'react';
import {getPost} from "../redux/actions/postsActions"


const Feed = ({post,setEditPostModalShow,setPostId}) => {
  const dispatch=useDispatch();
  const {userInfor}=useSelector((state)=>state.login);
  const [likes,setLikes]=useState(post?.likes?.length);
  const [liked,setLiked]=useState(post.likes?.includes(userInfor?.user._id));
  const body={"userId":userInfor?.user._id}

  const handleLike=(id)=>{
    setLiked((prev)=> !prev);
    dispatch(likePost(id,body));
   liked ? setLikes((prev)=>prev-1) : setLikes((prev)=>prev+1);
  }
  
  const handleDelete=(id)=>{
    dispatch(deletePost(id));
  }
  const handleEdit=(id)=>{
    setPostId(id);
    dispatch(getPost(id));
    setEditPostModalShow(true);
   
  }
    return (
        <div>
        { post.image ? (
       <Card className='mt-2'>
         <Card.Img src={post.image} alt="img"  bsPrefix='card-img3'/>
         <Card.Body className='p-2'>
           <div className='d-flex'>
           <p className='me-2' >
           {liked ?(<FcLike className='icon' size={25} onClick={()=>handleLike(post._id)}/>) : (<FcLikePlaceholder style={{cursor:"pointer"}} onClick={()=>handleLike(post._id)} size={25}/>)}        
           </p>
           <p className='me-2'>
           <BiMessageDots size={25} />
           </p>
           <p>
           <FaShareSquare size={25}/>
           </p>
           {post.userId === userInfor?.user._id && (
           <div className='d-flex gap-1 ms-auto p-2'>
               <p><AiFillDelete color='orange' size={25} onClick={()=>handleDelete(post._id)} className="icon"/></p>
               <p><MdEdit size={25} onClick={()=>handleEdit(post._id)} className="icon"/></p>
           </div>
           )}
           </div>
           <p className='mb-0'>{likes} likes</p>
           <p>{post.desc}</p>
         </Card.Body>
       </Card>
       ) : (
        <Card className='mt-2'>
        <Card.Body className='p-2'>
        <p>{post.desc}</p>

          <div className='d-flex'>
          <p className='me-2' >
            {liked ?(<FcLike size={25} style={{cursor:"pointer"}} onClick={()=>handleLike(post._id)}/>) : (<FcLikePlaceholder style={{cursor:"pointer"}} onClick={()=>handleLike(post._id)}  size={25}/>)}        
          
          </p>
          <p className='me-2'>
          <BiMessageDots size={25}/>
          </p>
          <p>
          <FaShareSquare size={25}/>
          </p>
          {post.userId === userInfor?.user._id && (
           <div className='d-flex gap-1 ms-auto p-2'>
               <p><AiFillDelete color='orange' size={25} onClick={()=>handleDelete(post._id)} className='icon'/></p>
               <p><MdEdit size={25} onClick={()=>handleEdit(post._id)} className="icon"/></p>
           </div>
           )}
          </div>
          <p className='mb-0'>{likes} likes</p>
        </Card.Body>
      </Card>
       )}
        </div>
    );
}

export default Feed;
