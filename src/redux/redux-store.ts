import {combineReducers, } from "redux";
import { legacy_createStore as createStore} from 'redux'
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import {storeType} from "../types/types";

let reducers = combineReducers({
    profileReducer,
    messageReducer
});

let store : storeType= createStore(reducers)


export default store