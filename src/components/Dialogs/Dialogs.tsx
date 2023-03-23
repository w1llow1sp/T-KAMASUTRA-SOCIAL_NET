import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPropsType} from "../../types/types";



const Dialogs = (props:dialogsPropsType) => {
    let DialogsElement = props.dialogsProps.map(dialog=>
        <DialogItem  key={dialog.id}id={dialog.id} name={dialog.name}/>
    )

    let MessagesElement = props.messageProps.map( msg =>
        <Message key={msg.id} message={msg.message}/>
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
