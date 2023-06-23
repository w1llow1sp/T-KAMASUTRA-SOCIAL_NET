import {ActionsTypes} from "../types/types";
import {v1} from "uuid";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = {
    name: string,
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    },
    status: string
    followed: boolean
}

export type InitialStateType = {
    users:Array<UserType>
}

let initialState: InitialStateType = {
    users: []
}


const userReducer = (state:InitialStateType = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                        if (user.id === action.userID ) {
                            return  {...user, followed:true}
                        }
                        return user
                })
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID ) {
                        return  {...user, followed:false}
                    }
                    return user
                })
            };
        case "SET-USERS":
            return {...state,
                users:[...state.users,...action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userID:number) => {
    return {
        type: FOLLOW,
        userID
    } as const
}

export const unfollowAC = (userID:number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const
}


export const setUsersAC = (users:Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}


export default userReducer