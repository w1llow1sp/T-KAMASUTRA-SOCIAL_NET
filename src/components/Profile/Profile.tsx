import React from "react";
import  styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";



const Profile =( )=> {
    return (
        <div className={styles.content}>
            <div>
                <img src='https://img.freepik.com/premium-vector/landscape-mountains-pine-forests_633248-3.jpg?w=1380' alt='background image'/>
            </div>
            <div>
                avatar+ descr
            </div>
           <MyPosts/>
        </div>
    )
}

export default Profile