/*------Типы для пропсов из index.tsx в App, нам надо передать 3 массива------*/

export type postsDataPropsType ={
    id:number,
    message:string,
    likesCount:number
}

export type dialogsDataPropsType ={
    id: number
    name:string
}

export type messagesDataPropsType ={
    id: number
    message: string
}
// Создадим гига-чад типизацию для всех пропсов из Index.tsx
// Но лучше таким неймином не баловаться,иначе тимлид по башка даст совсем глупый будешь

export type gigaChadPropsType ={
    posts:Array<postsDataPropsType>
    dialogs:Array<dialogsDataPropsType>
    messages:Array<messagesDataPropsType>
}

// Так как нам надо будет передать несколько  массивов в Dialogs, то позаботимся об этом заранее и создадим тип для них

export type dialogsPropsType = {
    dialogs:Array<dialogsDataPropsType>
    messages:Array<messagesDataPropsType>
}
export type postsPropsType = {
    posts: Array<postsDataPropsType>;
}
/*------Типы для пропсов из index.tsx в App, нам надо передать 3 массива------*/