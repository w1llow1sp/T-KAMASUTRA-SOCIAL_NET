import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/user-reducer";
import {Dispatch} from "redux";


type mapStateToProps = {
    usersPage:InitialStateType

}

let mapStateToProps = (state:AppStateType):mapStateToProps => {
    return {
        usersPage:state.usersPage
    }
}


type mapDispatchProps = {
    follow:(userID:number) => void
    unfollow:(userID:number) => void
    setUsers:(users:Array<any>)=>void
}

let mapDispatchToProps = (dispatch:Dispatch):mapDispatchProps => {
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
    }
}

export type UsersContainerProps = mapDispatchProps & mapStateToProps
const UsersContainer= connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer