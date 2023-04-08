import { postsDataPropsType, storeType} from "../types/types";
import  {v1} from "uuid";

const createRandomLikes = () => {
    let min = Math.ceil(0)
    let  max = Math.ceil(100)
    return Math.floor(Math.random() * (max-min)) + min

}


export const addPostAC= (postText:string)  => {
    return{
        type:'ADD-POST',
        postText:postText
    } as const
}

export const changePostAC= (newText:string)  => {
    return{
        type:'CHANGE-NEW-TEXT',
        newText:newText
    }  as const
}

const store:storeType = {
     _state :{
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
    },
    _onChange() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(callback) {
        callback()
        this._onChange = callback
    },


    dispatch (action) {
         if (action.type === 'ADD-POST') {
             const newPost : postsDataPropsType = {
                 id: v1(),
                 message:action.postText,
                 likesCount:createRandomLikes()
             }
             this._state.profilePage.posts.unshift(newPost)
             this._onChange()
         } else if (action.type === 'CHANGE-NEW-TEXT') {
             this._state.profilePage.newPostText =action.newText;
             this._onChange()
         }
    }

}


export default store