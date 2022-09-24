import {
    USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGIN_RESET,
    USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,
 
 } from "../constants/usercontants";
 import axios from "axios";

 export const registerUserAction=(user)=>{
    return async(dispatch)=>{
        dispatch({type:USER_LOGIN_REQUEST});        
        const res=await axios.post("/users/register",user);
        const data=await res.json();
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        });
    }
 }