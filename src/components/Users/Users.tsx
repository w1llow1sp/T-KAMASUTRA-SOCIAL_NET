import React, {ChangeEvent} from 'react';
import {Pagination} from '@mui/material';
import USER_PIC from '../../assets/images/images.png'
import {UserType} from '../../redux/user-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


type UserAPIPropsType = {
    totalUserCount: number
    pageSize: number
    users: Array<UserType>
    onPageChanged: (event: ChangeEvent<unknown>, pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    isFetching: boolean
}

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
                                ? <button onClick={() =>
                                {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        {withCredentials:true,
                                        headers: {
                                            'API-KEY':'a44880c0-9561-4b04-9b22-81b45ac13533'
                                        }})
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(user.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,{},{withCredentials:true,                                        headers: {
                                            'API-KEY':'a44880c0-9561-4b04-9b22-81b45ac13533'
                                        }})
                                        .then(response => {
                                             if (response.data.resultCode == 0) {
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
