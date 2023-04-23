import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPropsType} from "../../types/types";
import {sendMessageAC,updateMessageAC} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props:dialogsPropsType) => {


    let newMessageBody=props.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC(newMessageBody))
        props.dispatch(updateMessageAC(''))
    }

    let onNewMessageChange =(body:string) => {
        props.dispatch(updateMessageAC(body))
    }
    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={props.dialogsProps}
            messagePage={props.messageProps}
            newMessageBody={props.newMessageBody}

        />
    )
    ;
};

export default DialogsContainer;
