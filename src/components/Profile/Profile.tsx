import React from "react";
import  styles from './Profile.module.css'
import ProfileInfo from "./PropfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from './ProfileContainer';



const Profile =(props:ProfilePropsType)=> {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile!}/>
           <MyPostsContainer/>
        </div>
    )
}

export default Profile