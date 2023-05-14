import {v1} from "uuid";
import {ActionsTypes, messagePageType} from "../types/types";

let initialState = {
    dialogs:[
        {
            id: v1(),
            name: "Dima"
        }, {
            id: v1(),
            name: "Sveta"
        }, {
            id: v1(),
            name: "Yaroslav"
        }, {
            id: v1(),
            name: "Kostya"
        }, {
            id: v1(),
            name: "Zhenya"
        }, {
            id: v1(),
            name: "Dariya"
        }, {
            id: v1(),
            name: "Nastya"
        }, {
            id: v1(),
            name: "Marina"
        },

    ],
    messages: [
        {
            id: v1(),
            message: 'Hi. How are u?'
        }, {
            id: v1(),
            message: 'I want hangout w/ Sasha. That u thing?'
        }, {
            id: v1(),
            message: 'You havent been in street racing for a long time!'
        }, {
            id: v1(),
            message: 'I found a cool coffee shop. Are we going?'
        }, {
            id: v1(),
            message: 'How about a call on Discord?'
        },
    ],
    newMessageBody: '',

}

 const messageReducer =(state:messagePageType=initialState,action:ActionsTypes) => {
     switch (action.type) {
         case "UPDATE-NEW-MESSAGE-BODY":
             return {
                 ...state,
                 newMessageBody: action.body,
             };
         case "SEND-MESSAGE":
             let body = state.newMessageBody
             return {
                 ...state,
                 messages: [
                     ...state.messages,
                     {
                         id: v1(),
                         message: body,
                     },
                 ],
                 newMessageBody: "",
             };
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

export const sendMessageAC= ()  => {
    return{
        type:'SEND-MESSAGE',
    }  as const
}

export default messageReducer