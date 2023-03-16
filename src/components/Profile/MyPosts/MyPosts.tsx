import React from "react";
import  styles from './MyPosts.module.css'
import Post from "./Post/Post";

export type postDataPropsType ={
    id:number,
    message:string,
    likesCount:number
}

const MyPosts =()=> {
    let postsData = [
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
    let postsElement = postsData.map(el =>
        <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
    )
    return (
            <div className={styles.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div><textarea></textarea></div>

                    <div><button>Add post</button></div>

                </div>
                <div className={styles.posts}>
                    {postsElement}
                </div>
            </div>

    )
}

export default MyPosts;