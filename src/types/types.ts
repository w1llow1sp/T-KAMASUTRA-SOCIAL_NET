/*------Типы для пропсов из index.tsx в App, нам надо передать 3 массива------*/

import {addPostAC, changePostAC, ProfileType, setUserProfileAC} from "../redux/profile-reducer";
import {updateMessageAC, sendMessageAC} from "../redux/message-reducer";
import {Store} from "redux";
import {
    follow,
    setCurrentPage, setIsFetching,
    setUsers,
    setUserTotalCount,
    unfollow
} from "../redux/user-reducer";
import {v1} from 'uuid';


export type postsDataPropsType = {
    id: string,
    message: string,
}

export type dialogsDataPropsType = {
    id: string
    name: string
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changePostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof updateMessageAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUserTotalCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>

export type messagesDataPropsType = {
    id: string
    message: string
}
export type storeType = {
    _state: gigaChadPropsType
    _onChange: () => void

    subscribe: (callback: () => void) => void
    getState: () => gigaChadPropsType


    dispatch: (action: ActionsTypes) => void
}


export type reduxStoreType =
    Store<{
        profileReducer: {
            newPostText: string;
            posts: Array<postsDataPropsType>;
        };
        messageReducer: {
            dialogs: Array<dialogsDataPropsType>;
            messages: Array<messagesDataPropsType>;
            newMessageBody: string;
        };
    },
        ActionsTypes>

// Так как нам надо будет передать несколько  массивов в Dialogs, то позаботимся об этом заранее и создадим тип для них


export type messagePageType = {
    messages: Array<messagesDataPropsType>
    dialogs: Array<dialogsDataPropsType>
    newMessageBody: string
}
// шаманим теперь с appState  и призываем гига-чад типизацию
// а што ты мне сделаешь, я в другом городе
export type gigaChadPropsType = {
    profilePage: ProfilePageTypes
    messagePage: messagePageType
}

export type ProfilePageTypes = {
    newPostText: string
    posts: Array<postsDataPropsType>
    profile: ProfileType
}


export type ProfileProps = {
    store: storeType
}
//
/*------Типы для пропсов из index.tsx в App, нам надо передать 3 массива------*/

