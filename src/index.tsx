import React from 'react';
import './index.css';
import {subscribe} from "./redux/state";

import ReactDOM from "react-dom";
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";
import state from "./redux/state";


const renderTree = () => {
    ReactDOM.render(
        <App state={state} addPostCallback={addPost} updateNewPostTextCallback={updateNewPostText}/>,
        document.getElementById('root')
    );
}

subscribe(renderTree)
