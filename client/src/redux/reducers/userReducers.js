import {
   USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT,
   USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,
   GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_FAIL,
   GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAIL,
   UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,UPDATE_USER_FAIL,
   DELETE_USER_REQUEST,DELETE_USER_SUCCESS,DELETE_USER_FAIL,
   FOLLOW_USER_REQUEST,FOLLOW_USER_SUCCESS,FOLLOW_USER_FAIL,
   UNFOLLOW_USER_REQUEST,UNFOLLOW_USER_SUCCESS,UNFOLLOW_USER_FAIL,
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

export const getUserReducer=(state={},{type,payload})=>{
    switch(type){
        case GET_USER_REQUEST:
            return {loading:true}
        case GET_USER_SUCCESS:
            return {loading:false,user:payload,success:true}
        case GET_USER_FAIL:
            return {}
        default:
            return state;
    }
}
export const getUsersReducer=(state={},{type,payload})=>{
    switch(type){
        case GET_USERS_REQUEST:
            return {loading:true}
        case GET_USERS_SUCCESS:
            return {loading:false,users:payload,success:true}
        case GET_USERS_FAIL:
            return {}
        default:
            return state;
    }
}

export const deleteUserReducer=(state={},{type,payload})=>{
    switch(type){
        case DELETE_USER_REQUEST:
            return {loading:true}
        case DELETE_USER_SUCCESS:
            return {loading:false,message:payload}
        case DELETE_USER_FAIL:
            return {}
        default:
            return state;
    }
}
export const updateUserReducer=(state={},{type,payload})=>{
    switch(type){
        case UPDATE_USER_REQUEST:
            return {loading:true}
        case UPDATE_USER_SUCCESS:
            return {loading:false,user:payload,success:true}
        case UPDATE_USER_FAIL:
            return {}
        default:
            return state;
    }
}

export const folowUserReducer=(state={},{type,payload})=>{
    switch(type){
        case FOLLOW_USER_REQUEST:
            return {loading:true}
        case FOLLOW_USER_SUCCESS:
            return {loading:false,user:payload}
        case FOLLOW_USER_FAIL:
            return {}
        default:
            return state;
    }
}
export const unFollowUserReducer=(state={},{type,payload})=>{
    switch(type){
        case UNFOLLOW_USER_REQUEST:
            return {loading:true}
        case UNFOLLOW_USER_SUCCESS:
            return {loading:false,user:payload}
        case UNFOLLOW_USER_FAIL:
            return {}
        default:
            return state;
    }
}
