import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPropsType} from "../../types/types";
import {sendMessageAC, updateMessageAC} from "../../redux/state";



const Dialogs = (props:dialogsPropsType) => {
    let DialogsElement = props.dialogsProps.map(dialog=>
        <DialogItem  key={dialog.id}id={dialog.id} name={dialog.name}/>
    )

    let MessagesElement = props.messageProps.map( msg =>
        <Message key={msg.id} message={msg.message}/>
    )
    let newMessageBody=props.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC(newMessageBody))
        props.dispatch(updateMessageAC(''))
    }

    let onNewMessageChange =(event:ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.dispatch(updateMessageAC(body))
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {DialogsElement}
            </div>
            <div className={styles.messages}>
                <div>{MessagesElement}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder={'Enter your message'}
                    ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
