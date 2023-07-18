import React from "react";
import styles from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer';
import Preloader from '../../Preloader/Preloader';
// import plug image
import AVATAR from '../../../assets/images/images.png'


type PropsType = {
    profile: ProfileType
}


const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.profileInfo}>
            <div className={styles.profileWallpaperWrapper}>
                <img className={styles.profileWallpaper}
                     src='https://img.freepik.com/premium-vector/landscape-mountains-pine-forests_633248-3.jpg?w=1380'
                     alt='background image'/>
            </div>
            <div className={styles.descriptionBlock}>
                {/*блок проверки для аватара пользователя*/}
                {props.profile.photos.large
                    ? <img className={styles.avatar} src={props.profile.photos.large} alt={'User avatar'}/>
                    : <img className={styles.avatar} src={AVATAR} alt={'User avatar'}/>}
                {/*блок проверки для аватара пользователя*/}
                <h2 className={styles.fullName}>{props.profile.fullName}</h2>
                {/*блок проверки для статуса пользователя*/}
                {props.profile.aboutMe
                    ? <h3 className={styles.about}>{props.profile.aboutMe}</h3>
                    : <h3 className={styles.about}>Здесь могла бы быть ваша реклама)</h3>
                }
                {props.profile.lookingForAJob
                    ? <div className={styles.findJob}>Ищу работу: ✅</div>
                    : <div className={styles.findJob}>Ищу работу: ❌</div>}
                <span className={styles.aboutJob}>{props.profile.lookingForAJobDescription}</span>
                <div>
                    <div className={styles.fb}>facebook :{props.profile.contacts.facebook || '❌'}</div>
                    <div className={styles.gh}>github :{props.profile.contacts.github || '❌'}</div>
                    <div className={styles.vk}>VK :{props.profile.contacts.vk || '❌'}</div>
                    <div className={styles.insta}>instagram :{props.profile.contacts.instagram || '❌'}</div>
                </div>
                <div>
                    <div className={styles.tw}>twitter :{props.profile.contacts.twitter || '❌'}</div>
                    <div className={styles.mainLink}>mainLink :{props.profile.contacts.mainLink || '❌'}</div>
                    <div className={styles.website}>website :{props.profile.contacts.website || '❌'}</div>
                    <div className={styles.youtube}>youtube :{props.profile.contacts.youtube || '❌'}</div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo