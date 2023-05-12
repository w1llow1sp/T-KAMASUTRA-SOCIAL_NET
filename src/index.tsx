
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";



const renderTree = () => {
    ReactDOM.render(
        <Provider store={store}>
        <App/>
        </Provider>
        ,document.getElementById('root')
    );
}
renderTree()
store.subscribe(renderTree)
