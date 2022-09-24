import {
   USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT,
   USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,

} from "../constants/usercontants";

export const registerUserReducer=(state={},{type,payload})=>{
    switch(type){
        case USER_REGISTER_REQUEST:
            return {loading:true}
        case USER_REGISTER_SUCCESS:
            return {loading:false,userInfor:payload}
        case USER_REGISTER_FAIL:
            return {loading:false,error:payload}
        case USER_LOGOUT:
            return {}
        default:
            return state;
    }

}

export const loginUserReducer=(state={},{type,payload})=>{
    switch(type){
        case USER_LOGIN_REQUEST:
            return {loading:true}
        case USER_LOGIN_SUCCESS:
            return {loading:false,userInfor:payload}
        case USER_LOGIN_FAIL:
            return {loading:false,error:payload}
        case USER_LOGOUT:
            return {}
        default:
            return state;
    }

}