"use client"

import styles from "./logoutButton.module.css";
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  const router = useRouter()
  const me = { // 임시로 내 정보 있는것처럼
        id: 'wanderhoward',
        nickname: '떠돌이호랑이',
        image: '/5Udwvqim.jpg',
    }

    const onLogout = () => {
      signOut( {
        redirect: false
      })
      .then((response) => {
        console.log(`response:${response}`)
        router.replace("/")
      })
      .catch((error) => {
        console.log(`error:${error}`)
      })
    };

    return (
        <button className={styles.logOutButton} onClick={onLogout}>
            <div className={styles.logOutUserImage}>
                <img src={me.image} alt={me.id}/>
            </div>
            <div className={styles.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    )
}
