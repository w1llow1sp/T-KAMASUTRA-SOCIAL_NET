import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemPropsType ={
    id:number
    name:string
}

export type MesagePropsType ={
    message:string
}

const DialogItem =(props:DialogItemPropsType)=>{
    let path = '/dialogs/'+props.id
    return (
        <div className={`${styles.dialog} + ${styles.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MesagePropsType) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <DialogItem name={'Dima'} id={1}/>
                <DialogItem name={'Valera'} id={2}/>
                <DialogItem name={'Valentyn'} id={3}/>
                <DialogItem name={'Sasha'} id={4}/>
                <DialogItem name={'Zhenya'} id={5}/>
                <DialogItem name={'Dasha'} id={6}/>
            </div>
            <div className={styles.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Yo!'}/>
            </div>
        </div>
    );
};

export default Dialogs;
