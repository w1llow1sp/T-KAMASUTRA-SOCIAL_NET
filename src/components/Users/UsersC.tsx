import React, {ChangeEvent} from 'react';
import {UsersContainerProps} from "./UsersContainer";
import styles from './User.module.css'
import axios from 'axios';
import USER_PIC from './images.png'


class UsersC extends React.Component<UsersContainerProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUserTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <div>
            <div>
                {pages.map(page => {
                    return <span className={this.props.currentPage === page
                        ? styles.selectedPage
                        : styles.defaultPage}
                    onClick={()=>{this.onPageChanged(page)}}>{page}
                    </span>
                })}
            </div>
            {
                this.props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small !== null ? user.photos.small : USER_PIC}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => this.props.follow(user.id)}>Unfollow</button>
                                : <button onClick={() => this.props.unfollow(user.id)}>Follow</button>
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