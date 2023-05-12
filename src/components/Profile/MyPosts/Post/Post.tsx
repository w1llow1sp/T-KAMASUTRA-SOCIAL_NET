import React from "react";
import styles from './Post.module.css'

type MyPostPropsType = {
    message: string
    // likesCount:number
}

const Post = (props: MyPostPropsType) => {
    return (

        <div className={styles.post}>
            <div className={styles.avatarAndTextWrapper}>
                <img className={styles.avatar}
                     src='https://icons-for-free.com/iconfiles/png/512/avatar+circle+male+profile+user+icon-1320196710301016992.png'/>
                <span className={styles.item}>{props.message}</span>
            </div>
            <div className={styles.likeBtn}>
                {/*❤ {props.likesCount}*/}
            </div>
        </div>

    )
}

export default Post;