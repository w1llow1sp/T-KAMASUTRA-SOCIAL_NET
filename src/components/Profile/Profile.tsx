import React from "react";
import  styles from './Profile.module.css'
import ProfileInfo from "./PropfileInfo/ProfileInfo";

import MyPosts from "./MyPosts/MyPosts";
import {postsPropsType} from "../../types/types";





const Profile =(props:postsPropsType)=> {
/*    let postsData = [
        {
            id: 1,
            message: 'Its my first post!',
            likesCount:12
        }, {
            id: 2,
            message: 'I think to make some coffee..',
            likesCount:23
        },
    ]*/
    return (
        <div className={styles.content}>
            <ProfileInfo/>
           <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile