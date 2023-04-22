import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let reducers = combineReducers({
    profileReducer,
    messageReducer
});

let store = createStore(reducers)


export default store