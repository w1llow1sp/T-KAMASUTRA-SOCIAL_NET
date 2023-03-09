import React from "react";
import styles from './Post.module.css'

type MyPostPropsType = {
    message: string
    likesCount:number
}

const Post = (props: MyPostPropsType) => {
    return (

        <div className={styles.post}>
            <div className={styles.avatarAndTextWrapper}>
                <img className={styles.avatar}
                     src='https://icons-for-free.com/iconfiles/png/512/avatar+circle+male+profile+user+icon-1320196710301016992.png'/>
                <span className={styles.item}>{props.message}</span>
            </div>
            <span className={styles.likeBtn}>
                {props.likesCount}
            </span>
        </div>

    )
}

export default Post;