import React from 'react';
import FlipMove from "react-flip-move";
import {useSelector,useDispatch} from "react-redux"
import {getPosts} from "../redux/actions/postsActions"
import { useEffect } from 'react';
import Feed from "./Feed";


const Feeds = ({showProfileD,setEditPostModalShow,setPostId}) => {
  const dispatch=useDispatch();
  const {userInfor}=useSelector((state)=>state.login);
  let {posts,loading}=useSelector((state)=>state.posts);
  if(showProfileD){
    posts=posts?.filter((post)=>post.userId === userInfor?.user._id)
  }  
  useEffect(()=>{
    dispatch(getPosts(userInfor?.user._id));  
  },[userInfor])

    return (
      <div className="feeds">
        {loading && (<p>loading...</p>)}
        {!loading && (
      <FlipMove>
      {posts?.map((post) => ( 
       <div key={post._id}>
        <Feed post={post}  setEditPostModalShow={setEditPostModalShow} setPostId={setPostId}/>
       </div>
      ))}
      </FlipMove>
      )}
      </div>
    );
}

export default Feeds;
