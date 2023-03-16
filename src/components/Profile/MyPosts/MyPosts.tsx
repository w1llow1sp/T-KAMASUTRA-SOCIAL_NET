import React from "react";
import  styles from './MyPosts.module.css'
import Post from "./Post/Post";

export type postDataPropsType ={
    id:number,
    message:string,
    likesCount:number
}

const MyPosts =()=> {
    let postData = [
        {
            id: 1,
            message: 'Its my first post!',
            likesCount:12
        }, {
            id: 2,
            message: 'I think to make some coffee..',
            likesCount:23
        },
    ]
    return (
            <div className={styles.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div><textarea></textarea></div>

                    <div><button>Add post</button></div>

                </div>
                <div className={styles.posts}>
                    <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                    <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                </div>
            </div>

    )
}

export default MyPosts;