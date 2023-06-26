import React from 'react';
import {UsersContainerProps} from "./UsersContainer";
import styles from './User.module.css'
import axios from 'axios';
import USER_PIC from './images.png'


 class UsersC extends React.Component<UsersContainerProps> {

//жизненный цикл, life cycle methods, componentDidMount
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


     render() {
        return <div>
            {
                this.props.usersPage.users.map( user  => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small !== null ? user.photos.small : USER_PIC }/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={()=> this.props.follow(user.id)}>Unfollow</button>
                                :<button onClick={()=> this.props.unfollow (user.id)}>Follow</button>
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
    }
}

export default UsersC