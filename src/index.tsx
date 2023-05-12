

import React from 'react';

import ReactDOM from "react-dom";
import App from "./App";
import StoreContext, {Provider} from "./StoreContext";
import store from "./redux/store";



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
