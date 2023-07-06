
import React from "react";
import {addPostAC, changePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {postsDataPropsType} from "../../../types/types";
import {Dispatch} from "redux";

type mapStateToProps = {
    posts: Array<postsDataPropsType>
    newPostText: string
}

let mapStateToProps = (state: AppStateType):mapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

type mapDispatchProps = {
    updateNewPostText:(postText:string)=>void,
    addPost:(newText:string)=>void
}

let mapDispatchProps = (dispatch:Dispatch):mapDispatchProps => {
    return {
        addPost:(newText:string) => {
            dispatch(addPostAC(newText))
            dispatch(changePostAC(''))
        },
        updateNewPostText:(postText:string) => {
            dispatch(changePostAC(postText))

        }
    }

}

export type MyPostContainerProps = mapDispatchProps & mapStateToProps
const MyPostsContainer = connect(mapStateToProps, mapDispatchProps)(MyPosts)

export default MyPostsContainer;

