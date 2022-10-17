import {GET_POST_REQUEST,GET_POST_SUCCESS,GET_POST_FAIL,
    GET_POSTS_REQUEST,GET_POSTS_SUCCESS,GET_POSTS_FAIL,
    GET_TIME_LINE_POSTS_REQUEST,GET_TIME_LINE_POSTS_SUCCESS,GET_TIME_LINE_POSTS_FAIL,
    CREATE_POST_REQUEST,CREATE_POST_SUCCESS,CREATE_POST_FAIL,
    UPDATE_POST_REQUEST,UPDATE_POST_SUCCESS,UPDATE_POST_FAIL,
    LIKE_POST_REQUEST,LIKE_POST_SUCCESS,LIKE_POST_FAIL,
    DELETE_POST_REQUEST,DELETE_POST_SUCCESS,DELETE_POST_FAIL,
} from "../constants/postsconstants"

export const createpostReducer=(state={},{type,payload})=>{
    switch(type){
        case CREATE_POST_REQUEST:
            return {loading:true}
        case CREATE_POST_SUCCESS:
            return {loading:false,post:payload,success:true}
        case CREATE_POST_FAIL:
            return {}
        default:
            return state;
    }
}
export const getpostsReducer=(state={},{type,payload})=>{
    switch(type){
        case GET_POSTS_REQUEST:
            return {loading:true}
        case GET_POSTS_SUCCESS:
            return {loading:false,posts:payload,success:true}
        case GET_POSTS_FAIL:
            return {}
        default:
            return state;
    }
}
export const getTimeLinePostsReducer=(state={},{type,payload})=>{
    switch(type){
        case GET_TIME_LINE_POSTS_REQUEST:
            return {loading:true}
        case GET_TIME_LINE_POSTS_SUCCESS:
            return {loading:false,TimeLineposts:payload,success:true}
        case GET_TIME_LINE_POSTS_FAIL:
            return {}
        default:
            return state;
    }
}
export const getpostReducer=(state={},{type,payload})=>{
    switch(type){
        case GET_POST_REQUEST:
            return {loading:true}
        case GET_POST_SUCCESS:
            return {loading:false,post:payload,success:true}
        case GET_POST_FAIL:
            return {}
        default:
            return state;
    }
}
export const deletepostReducer=(state={},{type,payload})=>{
    switch(type){
        case DELETE_POST_REQUEST:
            return {loading:true}
        case DELETE_POST_SUCCESS:
            return {loading:false,post:payload,success:true}
        case DELETE_POST_FAIL:
            return {}
        default:
            return state;
    }
}
export const updatepostReducer=(state={},{type,payload})=>{
    switch(type){
        case UPDATE_POST_REQUEST:
            return {loading:true}
        case UPDATE_POST_SUCCESS:
            return {loading:false,post:payload,success:true}
        case UPDATE_POST_FAIL:
            return {}
        default:
            return state;
    }
}
export const likepostReducer=(state={},{type,payload})=>{
    switch(type){
        case LIKE_POST_REQUEST:
            return {loading:true}
        case LIKE_POST_SUCCESS:
            return {loading:false,post:payload,success:true}
        case LIKE_POST_FAIL:
            return {}
        default:
            return state;
    }
}