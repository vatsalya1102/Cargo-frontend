import { combineReducers } from "redux";
import auth from './auth'
import transports from "./transports";

export default combineReducers({ auth, transports });