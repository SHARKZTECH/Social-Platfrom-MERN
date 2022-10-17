import {
    USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,
    GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_FAIL,
    GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAIL,
    UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,UPDATE_USER_FAIL,
    DELETE_USER_REQUEST,DELETE_USER_SUCCESS,DELETE_USER_FAIL,
    FOLLOW_USER_REQUEST,FOLLOW_USER_SUCCESS,FOLLOW_USER_FAIL,
    UNFOLLOW_USER_REQUEST,UNFOLLOW_USER_SUCCESS,UNFOLLOW_USER_FAIL,

 } from "../constants/usercontants";
 import axios from "axios";

 import {BASE_URL} from "./base"
import { getPosts } from "./postsActions";

 export const loginUserAction=(user)=>{
    return async(dispatch)=>{
     try{
        dispatch({type:USER_LOGIN_REQUEST});
        const config={
            headers:{
                'Content-type':'application/json'
            }
        }       
        const {data}=await axios.post(`${BASE_URL}/api/auth/login`,user,config);
        
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        });
        localStorage.setItem("userInfor",JSON.stringify(data));
     }catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
     }
    }
 }
 export const registerUserAction=(user)=>{
    return async(dispatch)=>{
     try{
        dispatch({type:USER_REGISTER_REQUEST});
        const config={
            headers:{
                'Content-type':'application/json'
            }
        }       
        const {data}=await axios.post(`${BASE_URL}/api/auth/register`,user,config);
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        });
     }catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
     }
    }
 }

 export const getUsersAction=()=>{
     return async(dispatch,getState)=>{
        const {login:{userInfor},}=getState()
     try{
        dispatch({type:GET_USERS_REQUEST});
        const config={
            headers:{
                'Content-type':'application/json',
                "auth-token":userInfor.token
            }
        }       
        const {data}=await axios.get(`${BASE_URL}/api/users/`,config);
        dispatch({
            type:GET_USERS_SUCCESS,
            payload:data
        });
     }catch(error){
        dispatch({
            type:GET_USERS_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
     }
    }
 }
 export const getUserAction=(id)=>{
    return async(dispatch,getState)=>{
        const {login:{userInfor},}=getState()

     try{
        dispatch({type:GET_USER_REQUEST});
        const config={
            headers:{
                'Content-type':'application/json',
                "auth-token":userInfor.token

            }
        }       
        const {data}=await axios.get(`${BASE_URL}/api/users/${id}`,config);
        dispatch({
            type:GET_USER_SUCCESS,
            payload:data
        });
     }catch(error){
        dispatch({
            type:GET_USER_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
     }
    }
 }
 export const updateUserAction=(id,user)=>{
    return async(dispatch,getState)=>{
        const {login:{userInfor},}=getState()

     try{
        dispatch({type:UPDATE_USER_REQUEST});
        const config={
            headers:{
                'Content-type':'application/json',
                "auth-token":userInfor.token
            }
        } 
        
        const {data}=await axios.put(`${BASE_URL}/api/users/${id}`,user,config);
        dispatch({
            type:UPDATE_USER_SUCCESS,
            payload:data
        });
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        });
        localStorage.setItem("userInfor",JSON.stringify(data));
     }catch(error){
        dispatch({
            type:UPDATE_USER_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
     }
    }
 }
 export const deleteUserAction=(id)=>{
    return async(dispatch,getState)=>{
        const {login:{userInfor},}=getState()

     try{
        dispatch({type:DELETE_USER_REQUEST});
        const config={
            headers:{
                'Content-type':'application/json',
                "auth-token":userInfor.token

            }
        }       
        const {data}=await axios.delete(`${BASE_URL}/api/users/${id}`,config);
        dispatch({
            type:DELETE_USER_SUCCESS,
            payload:data
        });
     }catch(error){
        dispatch({
            type:DELETE_USER_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
     }
    }
 }
 export const followUserAction=(id,body)=>{
    return async(dispatch,getState)=>{
        let {login:{userInfor},}=getState();

     try{
        dispatch({type:FOLLOW_USER_REQUEST});
        const config={
            headers:{
                'Content-type':'application/json',
                "auth-token":userInfor.token

            }
        }       
        const {data}=await axios.put(`${BASE_URL}/api/users/${id}/follow`,body,config);
        dispatch({
            type:FOLLOW_USER_SUCCESS,
            payload:data
        });   
        userInfor.user.following.push(id);
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:userInfor
        });
        localStorage.removeItem("userInfor");
        localStorage.setItem("userInfor",JSON.stringify(userInfor));
        
     

     }catch(error){
        dispatch({
            type:FOLLOW_USER_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
     }
    }
 }
 export const unFollowUserAction=(id,body)=>{
    return async(dispatch,getState)=>{
        let {login:{userInfor},}=getState();

     try{
        dispatch({type:UNFOLLOW_USER_REQUEST});
        const config={
            headers:{
                'Content-type':'application/json',
                "auth-token":userInfor.token

            }
        }       
        const {data}=await axios.put(`${BASE_URL}/api/users/${id}/unfollow`,body,config);
        dispatch({
            type:UNFOLLOW_USER_SUCCESS,
            payload:data
        });   
        userInfor.user.following.pop(id);
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:userInfor
        });
        localStorage.removeItem("userInfor");
        localStorage.setItem("userInfor",JSON.stringify(userInfor));

      

     }catch(error){
        dispatch({
            type:UNFOLLOW_USER_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            :error.message
        })
     }
    }
 }