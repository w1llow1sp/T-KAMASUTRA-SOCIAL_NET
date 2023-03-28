import {postsDataPropsType} from "../types/types";
import  {v1} from "uuid";


let onChange =() => {
    console.log('State changed')
}

export const subscribe=(callback: () => void) => {
    callback()
    onChange = callback
}


const createRandomLikes = () => {
    let min = Math.ceil(0)
    let  max = Math.ceil(100)
    return Math.floor(Math.random() * (max-min)) + min

}

let state ={
    profilePage: {
        newPostText:'',
        posts:[
            {
                id: v1(),
                message: 'Its my first post!',
                likesCount:createRandomLikes()
            }, {
                id: v1(),
                message: 'I think to make some coffee..',
                likesCount:createRandomLikes()
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
        likesCount:createRandomLikes()
    }
    state.profilePage.posts.unshift(newPost)
    onChange()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText =newText;
    onChange()
}




export default state