/*------Типы для пропсов из index.tsx в App, нам надо передать 3 массива------*/

import {addPostAC,changePostAC} from "../redux/profile-reducer";
import {updateMessageAC,sendMessageAC} from "../redux/message-reducer";
import {EmptyObject, Store} from "redux";


export type postsDataPropsType ={
    id:string,
    message:string,
    likesCount:number
}

export type dialogsDataPropsType ={
    id: string
    name:string
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    |ReturnType<typeof changePostAC>
    |ReturnType<typeof updateMessageAC>
    |ReturnType<typeof sendMessageAC>

export type messagesDataPropsType ={
    id: string
    message: string
}
export type storeType= {
    _state:gigaChadPropsType
    _onChange:()=>void

    subscribe:(callback: () => void)=>void
    getState:()=>gigaChadPropsType


    dispatch: (action:ActionsTypes ) => void
}



export type reduxStoreType =
    Store<{
    profileReducer: {
        newPostText: string;
        posts:Array<postsDataPropsType>; };
    messageReducer: {
        dialogs: Array<dialogsDataPropsType>;
        messages: Array<messagesDataPropsType>;
        newMessageBody: string;
    }; },
        ActionsTypes>

// Так как нам надо будет передать несколько  массивов в Dialogs, то позаботимся об этом заранее и создадим тип для них

export type ProfilePageTypes = {
    newPostText:string
    posts: Array<postsDataPropsType>

}
export type messagePageType = {
    messages:Array<messagesDataPropsType>
    dialogs:Array<dialogsDataPropsType>
    newMessageBody:string
}
// шаманим теперь с appState  и призываем гига-чад типизацию
// а што ты мне сделаешь, я в другом городе
export type gigaChadPropsType ={
    profilePage:ProfilePageTypes
    messagePage:messagePageType
}

// Ложечка за пропсы в App.tsx
export  type appStatePropsType = {
    store : storeType
}
/*
export  type appStatePropsType = {
    /!*store : storeType*!/
    store:reduxStoreType
    dispatch: (action:ActionsTypes ) => void
}

*/


// Ложечка за пропсы в диалогах (прости господи)
/*export type dialogsPropsType ={
    dialogsProps:Array<dialogsDataPropsType>
    messageProps:Array<messagesDataPropsType>
    newMessageBody:string
    dispatch: (action:ActionsTypes ) => void
}*/
export type dialogsPropsType ={
    store:storeType
}


// Ложечка за типизацию  MyPosts
/*export type ProfileProps ={
    posts:Array<postsDataPropsType>
    dispatch: (action:ActionsTypes ) => void
    newPostText:string
}*/

export type ProfileProps = {
    store:storeType
}
//
/*------Типы для пропсов из index.tsx в App, нам надо передать 3 массива------*/

