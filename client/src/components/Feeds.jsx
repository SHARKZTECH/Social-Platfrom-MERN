import React from 'react';
import FlipMove from "react-flip-move";
import {useSelector,useDispatch} from "react-redux"
import {getPosts,likePost} from "../redux/actions/postsActions"
import { useEffect } from 'react';
import Feed from "./Feed";
import { useState } from 'react';



const Feeds = ({showProfileD}) => {
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
        <Feed post={post}/>
       </div>
      ))}
      </FlipMove>
      )}
      </div>
    );
}

export default Feeds;
