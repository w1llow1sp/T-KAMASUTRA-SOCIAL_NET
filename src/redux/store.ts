/*
import {  storeType} from "../types/types";
import  {v1} from "uuid";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";


const store:storeType = {
     _state :{
        profilePage: {
            newPostText:'',
            posts:[
                {
                    id: v1(),
                    message: 'Its my first post!',
                    //likesCount:createRandomLikes()
                }, {
                    id: v1(),
                    message: 'I think to make some coffee..',
                    //likesCount:createRandomLikes()
                },
            ],

        },
        messagePage:{
            dialogs:[
                {
                    id: v1(),
                    name: "Dima"
                }, {
                    id: v1(),
                    name: "Sveta"
                }, {
                    id: v1(),
                    name: "Yaroslav"
                }, {
                    id: v1(),
                    name: "Kostya"
                }, {
                    id: v1(),
                    name: "Zhenya"
                }, {
                    id: v1(),
                    name: "Dariya"
                }, {
                    id: v1(),
                    name: "Nastya"
                }, {
                    id: v1(),
                    name: "Marina"
                },

            ],
            messages: [
                {
                    id: v1(),
                    message: 'Hi. How are u?'
                }, {
                    id: v1(),
                    message: 'I want hangout w/ Sasha. That u thing?'
                }, {
                    id: v1(),
                    message: 'You havent been in street racing for a long time!'
                }, {
                    id: v1(),
                    message: 'I found a cool coffee shop. Are we going?'
                }, {
                    id: v1(),
                    message: 'How about a call on Discord?'
                },
            ],
            newMessageBody: '',

        },
    },
    _onChange() {
        console.log('State changed')
    },

    getState() {
         debugger
        return this._state
    },
    subscribe(obserder) {
        this._onChange = obserder
    },


    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.messagePage = messageReducer(this._state.messagePage,action);

        this._onChange()
}}


export default store*/

//just a plug
export default () => {}