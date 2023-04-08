/*------Типы для пропсов из index.tsx в App, нам надо передать 3 массива------*/


import store from "../redux/state";

export type postsDataPropsType ={
    id:string,
    message:string,
    likesCount:number
}

export type dialogsDataPropsType ={
    id: string
    name:string
}
type AddPostActionType = {
    type:'ADD-POST'
    postText:string
}

type ChaneNewTextActionType = {
    type:'CHANGE-NEW-TEXT'
    newText:string
}

export type ActionsTypes = AddPostActionType | ChaneNewTextActionType

export type messagesDataPropsType ={
    id: string
    message: string
}
export type storeType= {
    _state:gigaChadPropsType
    _onChange:()=>void

    subscribe:(callback: () => void)=>void
    getState:()=>gigaChadPropsType

    updateNewPostText:(newText:string)=>void
    addPost: (postText: string) =>void


    dispatch: (action:ActionsTypes ) => void
}

// Так как нам надо будет передать несколько  массивов в Dialogs, то позаботимся об этом заранее и создадим тип для них

export type ProfilePageTypes = {
    newPostText:string
    posts: Array<postsDataPropsType>
    dialogs:Array<dialogsDataPropsType>

}
export type messagePageType = {
    messages:Array<messagesDataPropsType>
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
    dispatch: (action:ActionsTypes ) => void
}


// Ложечка за пропсы в диалогах (прости господи)
export type dialogsPropsType ={
    dialogsProps:Array<dialogsDataPropsType>
    messageProps:Array<messagesDataPropsType>
}

// Ложечка за типизацию  MyPosts
export type ProfileProps ={
    posts:Array<postsDataPropsType>
    dispatch: (action:ActionsTypes ) => void
    newPostText:string
}
//
/*------Типы для пропсов из index.tsx в App, нам надо передать 3 массива------*/

