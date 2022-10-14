import React from 'react';
import FlipMove from "react-flip-move";
import {useSelector,useDispatch} from "react-redux"
import {getPosts,likePost} from "../redux/actions/postsActions"
import { useEffect } from 'react';
import Feed from "./Feed";



const Feeds = () => {
  const dispatch=useDispatch();

  const {userInfor}=useSelector((state)=>state.login);
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
