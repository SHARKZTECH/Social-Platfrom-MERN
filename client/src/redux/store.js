import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveToLocalStorage=(store)=>{
       try{
              const serializedStore=JSON.stringify(store);
              window.localStorage.setItem('store',serializedStore);
       }catch(err){console.log(err)}
}
const loadFromLocalStorage=()=>{
       try{
              const serializedStore=window.localStorage.getItem('store');
              if(serializedStore===null){return undefined;}
              return JSON.parse(serializedStore);
       }catch(err){
              console.log(err)
              return undefined;
       }
}

const userInforStorange=localStorage.getItem('userInfor') ?
JSON.parse(localStorage.getItem('userInfor')) :null

const initialState={
       ...loadFromLocalStorage,
       login:{userInfor:userInforStorange},    
}

const store = createStore(reducers,initialState, composeEnhancer(applyMiddleware(thunk)));

store.subscribe(()=>saveToLocalStorage(store.getState()));
export default store;