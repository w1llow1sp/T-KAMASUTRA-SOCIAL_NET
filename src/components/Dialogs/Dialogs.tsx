import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id: number
    name: string
}

export type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={`${styles.dialog} + ${styles.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

const Dialogs = (props: DialogItemPropsType) => {
    let dialogsData = [
        {
            id: 1,
            name: "Dima"
        }, {
            id: 2,
            name: "Sveta"
        }, {
            id: 3,
            name: "Yaroslav"
        }, {
            id: 4,
            name: "Kostya"
        }, {
            id: 5,
            name: "Zhenya"
        }, {
            id: 6,
            name: "Dariya"
        }, {
            id: 7,
            name: "Nastya"
        }, {
            id: 8,
            name: "Marina"
        },

    ]

    let messageData = [
        {
            id: 1,
            message: 'Hi. How are u?'
        }, {
            id: 2,
            message: 'I want hangout w/ Sasha. That u thing?'
        }, {
            id: 3,
            message: 'You havent been in street racing for a long time!'
        }, {
            id: 4,
            message: 'I found a cool coffee shop. Are we going?'
        }, {
            id: 5,
            message: 'How about a call on Discord?'
        },
    ]

    let DialogsElement = dialogsData.map(dialog=>
        <DialogItem id={dialog.id} name={dialog.name}/>
    )

    let MessagesElement = messageData.map( message =>
        <Message message={message.message}/>
    )
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {DialogsElement}
            </div>
            <div className={styles.messages}>
                {MessagesElement}
            </div>
        </div>
    );
};

export default Dialogs;
