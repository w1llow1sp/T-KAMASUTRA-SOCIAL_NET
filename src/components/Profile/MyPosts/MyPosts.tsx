import React, {ChangeEvent} from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfileProps} from "../../../types/types";


const MyPosts = (props: ProfileProps) => {

    function addPost() {
        props.addPostCallback(props.newPostText)
        props.updateNewPostTextCallback('')
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostTextCallback(e.currentTarget.value)
    }

    let postsElement = props.posts.map(post =>
        <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)


    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea  onChange={onPostChange} value={props.newPostText}/></div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>

    )
};

export default MyPosts;