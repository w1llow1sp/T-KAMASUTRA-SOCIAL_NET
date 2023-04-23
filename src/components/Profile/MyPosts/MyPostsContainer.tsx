import React, {ChangeEvent} from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfileProps} from "../../../types/types";
import {addPostAC,changePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props: ProfileProps) => {
    //TODO:Подумать как избавиться от newPostText

    function addPost() {
        props.dispatch(addPostAC(props.newPostText))
        props.dispatch(changePostAC(''))
    }

    let onPostChange = (text:string) => {
        props.dispatch(changePostAC(text))
    }


    return (
        <MyPosts
             updateNewPostText={onPostChange}
             addPost={addPost}
             posts={props.posts}
             newPostText={props.newPostText}
        />

    )
};

export default MyPostsContainer;