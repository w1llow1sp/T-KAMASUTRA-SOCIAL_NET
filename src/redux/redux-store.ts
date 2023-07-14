import {combineReducers, } from "redux";
import { createStore} from 'redux'
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import userReducer from "./user-reducer";

export let RootReducer = combineReducers({
    profilePage:profileReducer,
    messagePage:messageReducer,
    usersPage:userReducer,
});


export type AppStateType = ReturnType<typeof RootReducer>

let store = createStore(RootReducer)


export default store