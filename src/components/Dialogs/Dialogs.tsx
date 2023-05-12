import React, {ChangeEvent, FC} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {messagePageType,} from "../../types/types";


type DialogContainerProps = {
    updateNewMessageBody: (body:string) => void
    sendMessage: (msg:string) => void
    dialogsPage:messagePageType
}

const Dialogs: FC<DialogContainerProps> = ({
                                               updateNewMessageBody,
                                               sendMessage,
                                               dialogsPage,
                                           }) => {
    let state = dialogsPage

    let DialogsElement = state.dialogs.map(dialog =>
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
    )

    let MessagesElement = state.messages .map(msg =>
        <Message key={msg.id} message={msg.message}/>
    )

    const newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        sendMessage(newMessageBody)
    }

    let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        updateNewMessageBody(body)
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
                    <div>
                        <button
                            onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
