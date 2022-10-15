import axios from "axios";
import {BASE_URL} from "./base"

import {GET_POST_REQUEST,GET_POST_SUCCESS,GET_POST_FAIL,
    GET_POSTS_REQUEST,GET_POSTS_SUCCESS,GET_POSTS_FAIL,
    GET_TIME_LINE_POSTS_REQUEST,GET_TIME_LINE_POSTS_SUCCESS,GET_TIME_LINE_POSTS_FAIL,
    CREATE_POST_REQUEST,CREATE_POST_SUCCESS,CREATE_POST_FAIL,
    UPDATE_POST_REQUEST,UPDATE_POST_SUCCESS,UPDATE_POST_FAIL,
    LIKE_POST_REQUEST,LIKE_POST_SUCCESS,LIKE_POST_FAIL,
} from "../constants/postsconstants";

export const createPost=(post)=>{
    return async(dispatch,getState)=>{
        let {login:{userInfor},posts:{posts}}=getState();       

        try{
            dispatch({type:CREATE_POST_REQUEST});
            const config={
                headers:{
                    'Content-type':'application/json',
                    "auth-token":userInfor.token
                }
            }  
            
            const {data}=await axios.post(`${BASE_URL}/posts`,post,config);

            dispatch({type:CREATE_POST_SUCCESS,payload:data});
            posts.unshift(data);
             dispatch({type:GET_POSTS_SUCCESS,payload:posts});

        }catch(error){
            dispatch({
                type:CREATE_POST_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
    }
}
export const getPosts=(id)=>{
    return async(dispatch,getState)=>{
        const {login:{userInfor},}=getState()
        try{
            dispatch({type:GET_POSTS_REQUEST});
            const config={
                headers:{
                    'Content-type':'application/json',
                    "auth-token":userInfor.token
                }
            }  
            const {data}=await axios.get(`${BASE_URL}/posts/${id}/timeline`,config);

            dispatch({type:GET_POSTS_SUCCESS,payload:data});
        }catch(error){
            dispatch({
                type:GET_POSTS_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
    }
}
export const getTimeLinePosts=(id)=>{
    return async(dispatch,getState)=>{
        const {login:{userInfor},}=getState()
        try{
            dispatch({type:GET_TIME_LINE_POSTS_REQUEST});
            const config={
                headers:{
                    'Content-type':'application/json',
                    "auth-token":userInfor.token
                }
            }  
            const {data}=await axios.get(`${BASE_URL}/posts/${id}/timeline`,config);

            dispatch({type:GET_TIME_LINE_POSTS_SUCCESS,payload:data});
        }catch(error){
            dispatch({
                type:GET_TIME_LINE_POSTS_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
    }
}
export const getPost=(id)=>{
    return async(dispatch,getState)=>{
        const {login:{userInfor},}=getState()
        try{
            dispatch({type:GET_POST_REQUEST});
            const config={
                headers:{
                    'Content-type':'application/json',
                    "auth-token":userInfor.token
                }
            }  
            const {data}=await axios.get(`${BASE_URL}/posts/${id}`,config,data);

            dispatch({type:GET_POST_SUCCESS,payload:data});
        }catch(error){
            dispatch({
                type:GET_POST_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
    }
}
export const updatePost=(id)=>{
    return async(dispatch,getState)=>{
        const {login:{userInfor},}=getState()
        try{
            dispatch({type:UPDATE_POST_REQUEST});
            const config={
                headers:{
                    'Content-type':'application/json',
                    "auth-token":userInfor.token
                }
            }  
            const {data}=await axios.put(`${BASE_URL}/posts/${id}`,config,data);

            dispatch({type:UPDATE_POST_SUCCESS,payload:data});
        }catch(error){
            dispatch({
                type:UPDATE_POST_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
    }
}

export const likePost=(id,body)=>{
    return async(dispatch,getState)=>{
        const {login:{userInfor},}=getState()
        try{
            dispatch({type:LIKE_POST_REQUEST});
            const config={
                headers:{
                    'Content-type':'application/json',
                    "auth-token":userInfor.token
                }
            }  
            const {data}=await axios.put(`${BASE_URL}/posts/${id}/like`,body,config);

            dispatch({type:LIKE_POST_SUCCESS,payload:data});
        }catch(error){
            dispatch({
                type:LIKE_POST_FAIL,
                payload:error.response && error.response.data.detail
                ? error.response.data.detail
                :error.message
            })
        }
    }
}