import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const LOGIN_PAGE_PATH = '/i/flow/login'

export const {
    handlers: { GET, POST },
    auth,
    signIn,
} = NextAuth({
    pages: {
        signIn: LOGIN_PAGE_PATH,
        newUser: '/i/flow/signup',
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const authResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: credentials.username,
                        password: credentials.password,
                    }),
                })

                if (!authResponse.ok) {
                    return null
                }

                const user = await authResponse.json()
                console.log('user', user);
                return {
                    email: user.id,
                    name: user.nickname,
                    image: user.image,
                    ...user,
                }
            },
        }),
    ]
});
