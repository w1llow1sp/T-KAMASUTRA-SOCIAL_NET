import {ActionsTypes} from "../types/types";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'

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
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

let initialState: InitialStateType = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:4
}


const userReducer = (state:InitialStateType = initialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            debugger
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
                users:action.users}
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage:action.currentPage
            }
        case 'SET_TOTAL_USER_COUNT':
            return {
                ...state,
                totalUsersCount:action.totalCount
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

export const setCurrentPageAC = (currentPage:number) => {
    return {
        type:SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setUserTotalCountAC = (totalCount:number) => {
    return {
        type:SET_TOTAL_USER_COUNT,
        totalCount
    } as const
}


export default userReducer