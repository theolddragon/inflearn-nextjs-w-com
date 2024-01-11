"use client"

import React, {ReactNode} from 'react';
import styles from "@/app/(afterLogin)/_component/post.module.css";
import {useRouter} from "next/navigation";

type Props = {
    children: ReactNode,
    post: {
        postId: number;
        content: string,
        User: {
            id: string,
            nickname: string,
            image: string,
        },
        createdAt: Date,
        Images: any[],
    }
}

const PostArticle = ({ children, post }: Props) => {
    const router = useRouter();
    const onClick = () => {
        router.push(`/${post.User.id}/status/${post.postId}`);
    }
    return (
        <article onClickCapture={onClick} className={styles.post}>
            {children}
        </article>
    );
};

export default PostArticle;
