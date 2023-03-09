import React from "react";
import  styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts =( )=> {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>

                </div>
                <div className={styles.posts}>
                    <Post message={'Heey, this is my first post!'} likesCount={23}/>
                    <Post message={'I think to make some coffee..'} likesCount={3}/>
                </div>
            </div>

    )
}

export default MyPosts;