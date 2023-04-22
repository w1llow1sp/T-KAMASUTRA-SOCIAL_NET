import {ActionsTypes, postsDataPropsType, ProfilePageTypes, ProfileProps} from "../types/types";
import {v1} from "uuid";
import {createRandomLikes} from "./store";

let initialState = {
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
}

 const profileReducer = ( state = initialState,action:ActionsTypes) => {
     switch (action.type) {
         case "ADD-POST":
             const newPost: postsDataPropsType = {
                 id: v1(),
                 message: action.postText,
                 likesCount: createRandomLikes(),
             }
             state.posts.unshift(newPost)
             return state
         case "CHANGE-NEW-TEXT":
             state.newPostText = action.newText;
             return state
         default:
             return state
     }

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



export default profileReducer