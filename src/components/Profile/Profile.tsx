import React from "react";
import  styles from './Profile.module.css'
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import {ProfileProps} from "../../types/types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile =(props:ProfileProps)=> {

    return (
        <div className={styles.content}>
            <ProfileInfo/>
           <MyPostsContainer dispatch={props.dispatch} posts={props.posts} newPostText={props.newPostText}  />
        </div>
    )
}

export default Profile