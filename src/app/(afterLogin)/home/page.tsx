import styles from './home.module.css'
import Tab from '@/app/(afterLogin)/home/_component/Tab'
import PostForm from '@/app/(afterLogin)/home/_component/PostForm'
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { getPostRecommends } from '@/app/(afterLogin)/home/_lib/getPostRecommends'
import PostRecommends from '@/app/(afterLogin)/home/_component/PostRecommends'
import TabDecider from '@/app/(afterLogin)/home/_component/TabDecider'
import { auth } from '@/auth'
import { Suspense } from 'react'
import Loading from '@/app/(afterLogin)/home/loading'
import { Metadata } from 'next'
import TabDeciderSuspense from '@/app/(afterLogin)/home/_component/TabDeciderSuspense'

export const metadata: Metadata = {
    title: '홈 / Z',
    description: '홈',
}

export default async function Home() {
    const session = await auth();
    return (
        <main className={styles.main}>
            <TabProvider>
                <Tab />
                <PostForm me={session}/>
                <Suspense fallback={<Loading />}>
                    <TabDeciderSuspense />
                </Suspense>
            </TabProvider>
        </main>
    )
}
