import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPropsType} from "../../types/types";



const Dialogs = (props:dialogsPropsType) => {
/*    let dialogsData = [
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

    ]*/

/*   let messageData = [
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
    ]*/

    let DialogsElement = props.dialogs.map(dialog=>
        <DialogItem id={dialog.id} name={dialog.name}/>
    )

    let MessagesElement = props.messages.map( message =>
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
