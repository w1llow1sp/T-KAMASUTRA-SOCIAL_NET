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

import React, { ChangeEvent } from "react";
import { addPostAC, changePostAC } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
               /* let state = store.getState();*/
                function addPost() {
/*                    store.dispatch(addPostAC(state.profilePage.newPostText));
                    store.dispatch(changePostAC(''));*/
                }

                let onPostChange = (text: string) => {
                   /* store.dispatch(changePostAC(text));*/
                };

                return (
                    <StoreContext.Consumer>{
                        (store) => (
                            <MyPosts
                                updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}
                            />
                        )
                    }

                    </StoreContext.Consumer>
                );

};

export default MyPostsContainer;



/*
/!*
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

            export default MyPostsContainer;*!/

import React, { ChangeEvent } from "react";
import { addPostAC, changePostAC } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();

                function addPost() {
                    store.dispatch(addPostAC(state.profilePage.newPostText));
                    store.dispatch(changePostAC(''));
                }

                let onPostChange = (text: string) => {
                    store.dispatch(changePostAC(text));
                };

                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={store.getState().profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
*/
