import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/user-reducer";
import {Dispatch} from "redux";
import UsersC from './UsersC';



type MapStateToPropsType = {
    usersPage:InitialStateType
}

const mapStateToProps = (state:AppStateType) => {
    return {
        usersPage:state.usersPage
    } as MapStateToPropsType
}


type MapDispatchPropsType = {
    follow:(userID:number) => void
    unfollow:(userID:number) => void
    setUsers:(users:Array<UserType>)=>void
}

let mapDispatchToProps = (dispatch:Dispatch)=> {
    return {
        follow:(userID:number)=>{
            dispatch(followAC(userID))
        },
        unfollow:(userID:number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users:Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    } as MapDispatchPropsType
}

export type UsersContainerProps = MapStateToPropsType & MapDispatchPropsType


const UsersContainer= connect(mapStateToProps,mapDispatchToProps)(UsersC)

export default UsersContainer