import {gigaChadPropsType} from "./types/types";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export const renderTree = (state:gigaChadPropsType) => {
    ReactDOM.render(
        <App state={state} />,
        document.getElementById('root')
    );
}