import React from "react";
import  styles from './Profile.module.css'
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import {ProfileProps} from "../../types/types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile =()=> {

    return (
        <div className={styles.content}>
            <ProfileInfo/>
           <MyPostsContainer/>
        </div>
    )
}

export default Profile