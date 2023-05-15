import React, {FC} from 'react';
import {UsersContainerProps} from "./UsersContainer";
import styles from './User.module.css'

export const Users:FC<UsersContainerProps> = ({
    usersPage,
    unfollow,
    follow,
    setUsers
                                              }) => {
   if (usersPage.users.length === 0) {
       setUsers([
           {
               id: 1,
               photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/220px-Brad_Pitt_2019_by_Glenn_Francis.jpg',
               followed: true,
               fullName: 'Брэд Питт',
               status: 'Какой-то текст',
               location: {
                   city:'Оклахома',
                   country: 'USA'
               }
           },
           {
               id: 1,
               photoURL: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/a7c4b758-f324-42c3-9551-c87fcd34d269/1920x',
               followed: false,
               fullName: 'Анджелина Джоли',
               status: 'Какой-то текст',
               location: {
                   city:'Калифорния',
                   country: 'USA'
               }
           },
           {
               id: 1,
               photoURL: 'https://assets.vogue.ru/photos/602a50ed75a1f2122b641066/2:3/w_2560%2Cc_limit/GettyImages-462239140.jpg',
               followed: false,
               fullName: 'Дженнифер Энистон',
               status: 'Какой-то текст',
               location: {
                   city:'Калифорния',
                   country: 'USA'
               }
           },

       ])}

    return (
        <div>
            {
                usersPage.users.map( user  => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoURL} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={()=> follow(user.id)}>Unfollow</button>
                                :<button onClick={()=> unfollow (user.id)}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                             <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

