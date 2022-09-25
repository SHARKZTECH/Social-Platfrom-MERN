import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const userInforStorange=localStorage.getItem('userInfor') ?
JSON.parse(localStorage.getItem('userInfor')) :null

const initialState={
       login:{userInfor:userInforStorange},    
}

const store = createStore(reducers,initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;