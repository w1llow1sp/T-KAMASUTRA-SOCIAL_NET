import React from "react";
import  styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfileProps} from "../../../types/types";



const MyPosts = (props:ProfileProps) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    function addPost() {
        if (newPostElement.current ) {
            props.addPostCallback( newPostElement.current.value)
        }
    }

    let postsElement = props.postsProps.map(post =>
        <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)


    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>

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