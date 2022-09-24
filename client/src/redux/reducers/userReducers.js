import {
   USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGIN_RESET,
   USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,

} from "../constants/usercontants";

export const RegisterUserReducer=(state={},{type,payload})=>{
    switch(type){
        case USER_LOGIN_REQUEST:
            return {loading:true}
        case USER_LOGIN_SUCCESS:
            return (
                state={...state,user:payload},
                {loading:false}
            )
        case USER_LOGIN_FAIL:
            return {loading:false,
                     message:payload}
        case USER_LOGIN_RESET:
            return {
                state:{}
            }
        default:
            return state;
    }

}