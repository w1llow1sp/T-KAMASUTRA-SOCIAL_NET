import React from "react";
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom';

//types
type HeaderPropsType = {
    //setAuthUserData:(userId:number,email:string,login:string)=>void
    isAuth:boolean
    login:string | null
}

const Header = (props:HeaderPropsType) => {
  return (
        <header className={styles.header}>
            <img src="https://i.ibb.co/TPwyHfV/socianet-high-resolution-logo-color-on-transparent-background.png" alt="logo-no-background"/>

            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <p className={styles.userName}>Hello,{props.login}!</p>
                    : <NavLink to={'/login'} className={'niceNavLink'}>Login</NavLink>}

            </div>
        </header>
  );
};

export default Header;
