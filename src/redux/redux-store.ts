import {combineReducers, } from "redux";
import { legacy_createStore as createStore} from 'redux'
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import {storeType} from "../types/types";
import {SidebarReducer} from "./sidebar-reducer";

export let RootReducer = combineReducers({
    profilePage:profileReducer,
    messagePage:messageReducer,
});


export type AppStateType = ReturnType<typeof RootReducer>

let store = createStore(RootReducer)


export default store