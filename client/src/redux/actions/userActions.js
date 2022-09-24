import {
    USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,
 
 } from "../constants/usercontants";
 import axios from "axios";

 import {BASE_URL} from "./base"

 export const loginUserAction=(user)=>{
    return async(dispatch)=>{
     try{
        dispatch({type:USER_LOGIN_REQUEST});
        const config={
            headers:{
                'Content-type':'application/json'
            }
        }       
        const {data}=await axios.post(`${BASE_URL}/auth/login`,user,config);
        
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
        const res=await axios.post("/auth/register",user,config);
        const data=await res.json();
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