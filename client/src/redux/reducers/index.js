import { combineReducers } from "redux";

import
 { loginUserReducer, registerUserReducer,getUsersReducer,getUserReducer
   ,deleteUserReducer,updateUserReducer,folowUserReducer,unFollowUserReducer } 
 from "./userReducers";

const reducers=combineReducers({
   register:registerUserReducer,
   login:loginUserReducer,
   users:getUsersReducer,
   user:getUserReducer,
   deleteUser:deleteUserReducer,
   updateUser:updateUserReducer, 
   followUser:folowUserReducer,
   unFollowUser:unFollowUserReducer,  
});

export default reducers;