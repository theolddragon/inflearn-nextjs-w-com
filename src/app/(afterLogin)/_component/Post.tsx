import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'
import PostArticle from "@/app/(afterLogin)/_component/PostArticle";
import styles from "@/app/(afterLogin)/_component/post.module.css";
import Link from "next/link";
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import React from "react";

dayjs.locale('ko');
dayjs.extend(relativeTime)

const Post = () => {
    const target = {
        postId: 1,
        User: {
            id: 'elonmusk',
            nickname: 'Elon Musk',
            image: '/yRsRRjGO.jpg',
        },
        content: '클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ',
        createdAt: new Date(),
        Images: [],
    }

    return (
        <PostArticle post={target}>
            <div className={styles.postWrapper}>
                <div className={styles.postUserSection}>
                    <Link href={`/${target.User.id}`} className={styles.postUserImage}>
                        <img src={target.User.image} alt={target.User.nickname}/>
                        <div className={styles.postShade}/>
                    </Link>
                </div>
                <div className={styles.postBody}>
                    <div className={styles.postMeta}>
                        <Link href={`/${target.User.id}`}>
                            <span className={styles.postUserName}>{target.User.nickname}</span>
                            &nbsp;
                            <span className={styles.postUserId}>@{target.User.id}</span>
                            &nbsp;
                            ·
                            &nbsp;
                        </Link>
                        <span className={styles.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
                    </div>
                    <div>{target.content}</div>
                    <div className={styles.postImageSection}>

                    </div>
                    <ActionButtons/>
                </div>
            </div>
        </PostArticle>
    );
};

export default Post;
