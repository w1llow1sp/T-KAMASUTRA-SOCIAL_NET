import React from 'react';
import { sendMessageAC, updateMessageAC } from '../../redux/message-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {

                let onSendMessageClick = () => {
/*                    store.dispatch(sendMessageAC(newMessageBody));
                    store.dispatch(updateMessageAC(''));*/
                };

                let onNewMessageChange = (body:string) => {
                    /*store.dispatch(updateMessageAC(body));*/
                };

                return (
                    <StoreContext.Consumer>
                        {store => (
                            <Dialogs
                                updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={store.getState().messagePage}
                            />
                            )

            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;





/*import React from 'react';
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

export default DialogsContainer;*/
