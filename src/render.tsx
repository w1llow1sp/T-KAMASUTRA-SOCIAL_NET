import {gigaChadPropsType} from "./types/types";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {addPost, updateNewPostText} from "./redux/state";

export const renderTree = (state:gigaChadPropsType) => {
    ReactDOM.render(
        <App state={state} addPostCallback={addPost} updateNewPostTextCallback={updateNewPostText}/>,
        document.getElementById('root')
    );
}