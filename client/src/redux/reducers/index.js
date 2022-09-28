import { combineReducers } from "redux";

import
 { loginUserReducer, registerUserReducer,getUsersReducer,getUserReducer
   ,deleteUserReducer,updateUserReducer,folowUserReducer,unFollowUserReducer } 
 from "./userReducers";
 import {getpostReducer,getpostsReducer,getTimeLinePostsReducer,
      createpostReducer,updatepostReducer,likepostReducer} from "./postsReducer"

const reducers=combineReducers({
   register:registerUserReducer,
   login:loginUserReducer,
   users:getUsersReducer,
   user:getUserReducer,
   deleteUser:deleteUserReducer,
   updateUser:updateUserReducer, 
   followUser:folowUserReducer,
   unFollowUser:unFollowUserReducer,  

   post:getpostReducer,
   posts:getpostsReducer,
   timeLinePosts:getTimeLinePostsReducer,
   createPost:createpostReducer,
   updatePost:updatepostReducer,
   likePost:likepostReducer,
});

export default reducers;