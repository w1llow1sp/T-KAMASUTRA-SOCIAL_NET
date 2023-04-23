import React, { ChangeEvent } from 'react';
import styles from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { dialogsPropsType } from '../../types/types';
import { sendMessageAC, updateMessageAC } from '../../redux/message-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().messagePage;

                let newMessageBody = state.newMessageBody;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageAC(newMessageBody));
                    store.dispatch(updateMessageAC(''));
                };

                let onNewMessageChange = (body:string) => {
                    store.dispatch(updateMessageAC(body));
                };

                return (
                    <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
