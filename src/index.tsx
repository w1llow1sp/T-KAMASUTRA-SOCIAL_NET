/*
import React from 'react';
import store from "./redux/redux-store";

import ReactDOM from "react-dom";
import App from "./App";
import { reduxStoreType} from "./types/types";
import {BrowserRouter} from "react-router-dom";


let renderTree = (state:reduxStoreType) => {
    ReactDOM.render(
        <BrowserRouter>
        <App store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


renderTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
})
*/

import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";


const renderTree = () => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
renderTree()
store.subscribe(renderTree)
