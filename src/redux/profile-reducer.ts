import {ActionsTypes, postsDataPropsType, ProfileProps} from "../types/types";
import {v1} from "uuid";
import {Dispatch} from "redux";
import { usersAPI} from "../api/api";

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string
        large: string

    }
}

let initialState = {
    newPostText: 'it-kamasutra.com',
    posts: [
        {
            id: v1(),
            message: 'Its my first post!',
            // likesCount:createRandomLikes()
        }, {
            id: v1(),
            message: 'I think to make some coffee..',
            // likesCount:createRandomLikes()
        },
    ],
    profile: null as ProfileType | null
}


const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: postsDataPropsType = {
                id: v1(),
                message: action.postText,
                // likesCount: createRandomLikes(),
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            };
        case "CHANGE-NEW-TEXT":
            return {
                ...state,
                newPostText: action.newText,
            };
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
};

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}

export const changePostAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}

export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    return  usersAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data));
    });
}


export default profileReducer