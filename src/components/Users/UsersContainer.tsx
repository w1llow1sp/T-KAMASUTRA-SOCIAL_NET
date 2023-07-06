import React, {ChangeEvent} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUserTotalCountAC,
    unfollowAC,
    UserType
} from "../../redux/user-reducer";
import {Dispatch} from "redux";

import axios from 'axios';
import Users from './Users';


//---types---//


type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number
    totalUserCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setUserTotalCount: (totalCount: number) => void
}
export type UsersContainerProps = MapStateToPropsType & MapDispatchPropsType

//---types---//

class UsersContainer extends React.Component<UsersContainerProps> {

    componentDidMount() {
        this.fetchUsers(this.props.currentPage);
    }

    fetchUsers = (pageNumber: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUserTotalCount(response.data.totalCount);
            })
    }

    onPageChanged = (event: ChangeEvent<unknown>, pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.fetchUsers(pageNumber);
    }

    render() {
        return <Users
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    } as MapStateToPropsType
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUserTotalCount: (totalCount: number) => {
            dispatch(setUserTotalCountAC(totalCount))
        },
    } as MapDispatchPropsType
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
