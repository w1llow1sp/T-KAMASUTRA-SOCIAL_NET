import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postsData = [
    {
        id: 1,
        message: 'Its my first post!',
        likesCount:12
    }, {
        id: 2,
        message: 'I think to make some coffee..',
        likesCount:23
    },
]

let dialogsData = [
    {
        id: 1,
        name: "Dima"
    }, {
        id: 2,
        name: "Sveta"
    }, {
        id: 3,
        name: "Yaroslav"
    }, {
        id: 4,
        name: "Kostya"
    }, {
        id: 5,
        name: "Zhenya"
    }, {
        id: 6,
        name: "Dariya"
    }, {
        id: 7,
        name: "Nastya"
    }, {
        id: 8,
        name: "Marina"
    },

]

let messagesData = [
    {
        id: 1,
        message: 'Hi. How are u?'
    }, {
        id: 2,
        message: 'I want hangout w/ Sasha. That u thing?'
    }, {
        id: 3,
        message: 'You havent been in street racing for a long time!'
    }, {
        id: 4,
        message: 'I found a cool coffee shop. Are we going?'
    }, {
        id: 5,
        message: 'How about a call on Discord?'
    },
]


ReactDOM.render(
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />,
  document.getElementById('root')
);