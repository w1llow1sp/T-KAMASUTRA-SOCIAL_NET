import {v1} from "uuid";
import {ActionsTypes, messagePageType} from "../types/types";

 const messageReducer =(state:messagePageType,action:ActionsTypes) => {
     switch (action.type) {
         case "UPDATE-NEW-MESSAGE-BODY":
             state.newMessageBody =action.body;
             return state
         case "SEND-MESSAGE":
             let body =state.newMessageBody;
             state.newMessageBody = '';
             state.messages.push(
                 {
                     id: v1(),
                     message: body})
             return state
         default:
             return state
     }
 }
export const updateMessageAC= (body:string)  => {
    return{
        type:'UPDATE-NEW-MESSAGE-BODY',
        body:body
    }  as const
}

export const sendMessageAC= (msg:string)  => {
    return{
        type:'SEND-MESSAGE',
        newMessageBody:msg
    }  as const
}

export default messageReducer