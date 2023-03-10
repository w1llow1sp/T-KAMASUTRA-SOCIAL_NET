import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <div className={`${styles.dialog} + ${styles.active}`}>
                    <NavLink to={'/dialogs/1'}>Dima</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={'/dialogs/2'}>Valera</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={'/dialogs/3'}>Valentyn</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={'/dialogs/4'}>Sasha</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={'/dialogs/5'}>Zhenya</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink to={'/dialogs/6'}>Dasha</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>Yo!</div>
            </div>
        </div>
    );
};

export default Dialogs;
