import { auth, LOGIN_PAGE_PATH } from './auth'
import { NextResponse } from 'next/server'

export async function middleware() {
    const session = await auth();
    if (!session) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_LOCAL}${LOGIN_PAGE_PATH}`);
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/compose/tweet',
        // '/home',
        '/explore',
        '/messages',
        '/search'
    ]
}
