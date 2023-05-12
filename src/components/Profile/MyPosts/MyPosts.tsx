import React, {ChangeEvent, FC} from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostContainerProps} from "./MyPostsContainer";


const MyPosts :FC<MyPostContainerProps> = ({posts,
                                               newPostText,
                                               updateNewPostText,
                                               addPost}) => {


    function OnAddPost() {
        addPost(newPostText)
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text  = e.currentTarget.value
        updateNewPostText(text)
    }
    let postsElement = posts.map(post =>
        <Post key={post.id} message={post.message}/>)

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea
                    onChange={onPostChange}
                    value={newPostText}/></div>

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