import { combineReducers } from "redux";

import { RegisterUserReducer } from "./userReducers";
const reducers=combineReducers({
   register:RegisterUserReducer,
});
export default reducers;