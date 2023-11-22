import React, {ChangeEvent} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUsers, setCurrentPage, setIsFollowing, unfollow,
    UserType
} from "../../redux/user-reducer";
import Users from './Users';
import Preloader from '../Preloader/Preloader';




//---types---//
type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
   // setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
   // setUserTotalCount: (totalCount: number) => void
   // setIsFetching: (isFetching: boolean) => void
    setIsFollowing:(isFetching: boolean, userId: number) => void
    getUsers: (pageNumber:number,pageSize: number) =>void
}
export type UsersContainerProps = MapStateToPropsType & MapDispatchPropsType

//---types---//

class UsersContainer extends React.Component<UsersContainerProps> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)

    }
    onPageChanged = (event: ChangeEvent<unknown>, pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
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
                isFollowing={this.props.setIsFollowing}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    } as MapStateToPropsType
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setIsFollowing,
    getUsers
})(UsersContainer)
