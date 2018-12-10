import authReducer from "./authReducer";
import { combineReducers } from "redux";

const myReducers = combineReducers({
  auth: authReducer
});

export default myReducers;
