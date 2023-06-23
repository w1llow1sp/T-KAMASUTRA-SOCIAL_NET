import React, {FC} from 'react';
import {UsersContainerProps} from "./UsersContainer";
import styles from './User.module.css'
import axios from 'axios';
import USER_PIC from './images.png'


export class Users extends React.Component<UsersContainerProps, any> {

    constructor(props:UsersContainerProps) {
        super(props);
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
    }


    render() {
        const {usersPage, unfollow, follow} = this.props;

        return (
            <div>

                {
                    usersPage.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            {user.photos.small === null
                                ? <img src={USER_PIC} className={styles.userPhoto}/>
                                : <img src={user.photos.small} className={styles.userPhoto}/>
                            }

                            <img src={user.photos.small} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => follow(user.id)}>Unfollow</button>
                                : <button onClick={() => unfollow(user.id)}>Follow</button>
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
            </div>)

    }
}
