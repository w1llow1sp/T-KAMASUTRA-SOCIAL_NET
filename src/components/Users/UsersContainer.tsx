import React, {ChangeEvent} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, setCurrentPage, setIsFetching,
    setUsers, setUserTotalCount, unfollow,
    UserType
} from "../../redux/user-reducer";
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import {usersAPI} from '../../api/api';


//---types---//
type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setUserTotalCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}
export type UsersContainerProps = MapStateToPropsType & MapDispatchPropsType

//---types---//

class UsersContainer extends React.Component<UsersContainerProps> {

    componentDidMount() {
        this.props.setIsFetching(true)
        this.fetchUsers(this.props.currentPage);
    }

    fetchUsers = (pageNumber: number) => {
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setUserTotalCount(data.totalCount)
                this.props.setIsFetching(false);
            })
    }

    onPageChanged = (event: ChangeEvent<unknown>, pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true)
        this.fetchUsers(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
            />
        </>

    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    } as MapStateToPropsType
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setUserTotalCount, setIsFetching,
})(UsersContainer)

