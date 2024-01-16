import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'
import PostArticle from '@/app/(afterLogin)/_component/PostArticle'
import styles from '@/app/(afterLogin)/_component/post.module.css'
import Link from 'next/link'
import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons'
import React, { MouseEventHandler } from 'react'
import { Post } from '@/model/Post'
import PostImages from '@/app/(afterLogin)/_component/PostImages'

dayjs.locale('ko');
dayjs.extend(relativeTime)

type Props = {
    noImage?: boolean
    post: Post
}
const Post = ({ noImage, post }: Props) => {
    let target = post;
    if (post.Original) {
        target = post.Original;
    }
    const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.stopPropagation();
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
                    <div>
                        <PostImages post={target}/>
                    </div>
                    <ActionButtons/>
                </div>
            </div>
        </PostArticle>
    );
};

export default Post;
