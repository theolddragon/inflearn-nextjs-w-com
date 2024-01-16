"use client"

import styles from "./logoutButton.module.css";
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

export default function LogoutButton() {
  const router = useRouter()
  const { data: me } = useSession()
  if (!me?.user) {
    return null;
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
                <img src={me?.user.image as string} alt={me?.user.id}/>
            </div>
            <div className={styles.logOutUserName}>
                <div>{me?.user.name}</div>
                <div>@{me?.user.email}</div>
            </div>
        </button>
    )
}
