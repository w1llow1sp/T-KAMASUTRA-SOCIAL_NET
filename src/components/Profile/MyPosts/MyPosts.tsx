import React from "react";
import  styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {postsPropsType} from "../../../types/types";



const MyPosts = (props: postsPropsType) => {

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
    let postsElement = props.posts.map(post =>
        <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
    )
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>

                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>

    )
};

export default MyPosts;