import {postsDataPropsType} from "../types/types";
import  {v1} from "uuid";

let state ={
    profilePage: {
        posts:[
            {
                id: v1(),
                message: 'Its my first post!',
                likesCount:12
            }, {
                id: v1(),
                message: 'I think to make some coffee..',
                likesCount:23
            },
        ],
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

    },
    messagePage:{
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
        ]

    },
}


export const addPost = (postText: string) => {
    const newPost : postsDataPropsType = {
        id: v1(),
        message: postText,
        likesCount:0
    }
    state.profilePage.posts.push(newPost)
}

export default state