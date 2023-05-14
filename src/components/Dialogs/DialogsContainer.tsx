import React from 'react';
import {sendMessageAC, updateMessageAC} from '../../redux/message-reducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {messagePageType} from "../../types/types";
import {Dispatch} from "redux";

type mapStatePropsType ={
dialogPage:messagePageType
}

type MapDispatchPropsType = {
    updateNewMessageBody:(msg:string)=>void
    sendMessage:()=>void
}

export type DialogsPropsType = mapStatePropsType & MapDispatchPropsType

let mapStateToProps= (state:AppStateType):mapStatePropsType => {
    return {
        dialogPage:state.messagePage
    }
}
let mapDispatchToProps= ( dispatch:Dispatch):MapDispatchPropsType => {
    return {
        updateNewMessageBody: (msg:string) => {
           dispatch(updateMessageAC(msg))
        },
        sendMessage:()=>{
            dispatch(sendMessageAC())
        }
    }
}



const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);

export default DialogsContainer;


