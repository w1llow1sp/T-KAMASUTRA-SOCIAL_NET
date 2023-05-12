/*
import React, {ChangeEvent} from "react";
import {addPostAC, changePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


    const MyPostsContainer = () => {
        return (
            <StoreContext.Consumer>
                {
                    (store) => {
                        let state = store.getState() // здесь нужно использовать store, а не props.store
                        function addPost() {
                            store.dispatch(addPostAC(state.profilePage.newPostText)) // здесь нужно использовать state.profilePage.newPostText, а не props.newPostText
                            store.dispatch(changePostAC(''))
                        }

                        let onPostChange = (text: string) => {
                            store.dispatch(changePostAC(text))
                        }
                        // здесь не нужно ставить новую строку после ключевого слова return, потому что в этом случае будет возвращен undefined
                        return (
                            <MyPosts
                                updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText} // здесь нужно использовать state.profilePage.newPostText, а не props.newPostText
                            />
                        );
                    }
                }
            </StoreContext.Consumer>
        )
    }

            export default MyPostsContainer;*/

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
            dispatch(addPostAC(postText))

        }
    }

}

export type MyPostContainerProps = mapDispatchProps & mapStateToProps
const MyPostsContainer = connect(mapStateToProps, mapDispatchProps)(MyPosts)

export default MyPostsContainer;

