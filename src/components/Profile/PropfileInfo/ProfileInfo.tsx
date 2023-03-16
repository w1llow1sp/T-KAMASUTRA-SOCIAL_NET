import React from "react";
import  styles from './ProfileInfo.module.css'



const ProfileInfo = () => {
return(
    <div className={styles.profileInfo}>
        <div className={styles.profileWallpaperWrapper}>
            <img className={styles.profileWallpaper} src='https://img.freepik.com/premium-vector/landscape-mountains-pine-forests_633248-3.jpg?w=1380' alt='background image'/>
        </div>
        <div className={styles.descriptionBlock}>
            avatar+ descr
        </div>
    </div>
)
}
export default ProfileInfo