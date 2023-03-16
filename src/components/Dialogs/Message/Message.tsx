import React from 'react';
import styles from './../Dialogs.module.css'

export type MessagePropsType = {
    message: string
}


export const Message = (props: MessagePropsType) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

