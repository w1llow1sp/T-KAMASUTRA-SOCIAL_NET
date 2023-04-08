import React from "react";
import  styles from './Profile.module.css'
import ProfileInfo from "./PropfileInfo/ProfileInfo";

import MyPosts from "./MyPosts/MyPosts";
import {ProfileProps} from "../../types/types";



const Profile =(props:ProfileProps)=> {

    return (
        <div className={styles.content}>
            <ProfileInfo/>
           <MyPosts dispatch={props.dispatch} posts={props.posts} addPostCallback={props.addPostCallback} newPostText={props.newPostText} updateNewPostTextCallback={props.updateNewPostTextCallback} />
        </div>
    )
}

export default Profile