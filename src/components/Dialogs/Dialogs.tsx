import React, {ChangeEvent, FC} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {messagePageType,} from "../../types/types";
import {DialogsPropsType} from "./DialogsContainer";

const Dialogs: FC<DialogsPropsType> = ({
                                               updateNewMessageBody,
                                               sendMessage,
                                               dialogPage,
                                           }) => {


    let DialogsElement = dialogPage.dialogs.map(dialog =>
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>
    )

    let MessagesElement = dialogPage.messages.map(msg =>
        <Message key={msg.id} message={msg.message}/>
    )

    const newMessageBody = dialogPage.newMessageBody

    let onSendMessageClick = () => {
        sendMessage()

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
                            className={'commonPrettyBtn'}
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
