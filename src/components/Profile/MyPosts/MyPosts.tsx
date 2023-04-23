import React, {ChangeEvent} from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {postsDataPropsType} from "../../../types/types";



type MPContainerProps = {
    updateNewPostText: (text:string)=> void
    addPost:()=>void
    posts:Array<postsDataPropsType>
    newPostText:string
}
const MyPosts = (props: MPContainerProps) => {

    function OnAddPost() {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text  = e.currentTarget.value
        props.updateNewPostText(text)
    }
    let postsElement = props.posts.map(post =>
        <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea
                    onChange={onPostChange}
                    value={props.newPostText}/></div>

                <div>
                    <button onClick={OnAddPost}>Add post</button>
                </div>

            </div>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>

    )
};

export default MyPosts;