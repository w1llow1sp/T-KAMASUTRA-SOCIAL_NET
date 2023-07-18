import React, {ChangeEvent} from 'react';
//import Pagination from Material UI
import {Pagination} from '@mui/material';
//import NavLink
import {NavLink} from 'react-router-dom';
//import types
import {UserType} from '../../redux/user-reducer';
//import plug image
import USER_PIC from '../../assets/images/images.png'
//import DAL-object
import {usersAPI} from '../../api/api';



//---Types---//
type UserAPIPropsType = {
    totalUserCount: number
    pageSize: number
    users: Array<UserType>
    onPageChanged: (event: ChangeEvent<unknown>, pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    isFetching: boolean
}
//---Types---//

const Users = (props: UserAPIPropsType) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <Pagination
                count={pagesCount}
                color="primary"
                onChange={props.onPageChanged}
                size={'large'}
            />
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : USER_PIC} alt={'User avatar'}/>
                                </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button className={'commonPrettyBtn'} onClick={() =>
                                {
                                    usersAPI.unfollowUser(user.id).then(data => {
                                            if (data.resultCode == 0) {
                                                props.unfollow(user.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button className={'commonPrettyBtn'} onClick={() => {
                                    usersAPI.followUser(user.id)
                                        .then(data => {
                                             if (data.resultCode == 0) {
                                                 props.follow(user.id)
                                             }
                                        })
                                }}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>Оклахома</div>
                             <div>USA</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;
