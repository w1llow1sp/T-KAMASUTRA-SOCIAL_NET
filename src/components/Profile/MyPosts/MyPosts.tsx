import React from "react";
import  styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts =( )=> {
    return (
            <div className={styles.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div><textarea></textarea></div>

                    <div><button>Add post</button></div>

                </div>
                <div className={styles.posts}>
                    <Post message={'Heey, this is my first post!'} likesCount={23}/>
                    <Post message={'I think to make some coffee..'} likesCount={3}/>
                </div>
            </div>

    )
}

export default MyPosts;