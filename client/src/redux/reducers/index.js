import { combineReducers } from "redux";

import { loginUserReducer, registerUserReducer } from "./userReducers";

const reducers=combineReducers({
   register:registerUserReducer,
   login:loginUserReducer,
});

export default reducers;