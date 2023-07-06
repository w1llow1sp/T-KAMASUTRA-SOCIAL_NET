import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setUsersAC,
    setUserTotalCountAC,
    unfollowAC,
    UserType
} from "../../redux/user-reducer";
import {Dispatch} from "redux";
import UsersC from './UsersC';



type MapStateToPropsType = {
    users:Array<UserType>,
    pageSize:number
    totalUserCount:number
    currentPage:number
}

const mapStateToProps = (state:AppStateType) => {
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUserCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    } as MapStateToPropsType
}


type MapDispatchPropsType = {
    follow:(userID:number) => void
    unfollow:(userID:number) => void
    setUsers:(users:Array<UserType>)=>void
    setCurrentPage:(pageNumber:number)=>void
    setUserTotalCount:(totalCount:number) => void
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
        },
        setCurrentPage: (pageNumber:number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUserTotalCount: (totalCount:number) => {
            dispatch(setUserTotalCountAC(totalCount))
        },
    } as MapDispatchPropsType
}

export type UsersContainerProps = MapStateToPropsType & MapDispatchPropsType


const UsersContainer= connect(mapStateToProps,mapDispatchToProps)(UsersC)

export default UsersContainer