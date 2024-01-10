import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
// import { API } from "@/config/apis";
import { ROUTE } from "@/config/routes";
// import { fetchData } from ".";

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        // Github
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),

        // Credentials
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.

            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "admin",
                },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                // You need to provide your own logic here that takes the credentials with authorize(credentials, req)
                // Add logic here to look up the user from the credentials supplied
                const user = {
                    id: "1",
                    lastName: "Nguyen",
                    firstName: "Hoang Tuan",
                    email: "nhtuan212@gmail.com",
                };

                const credentialDetails = {
                    username: credentials?.username,
                    password: credentials?.password,
                };

                // const resp = await fetchData({
                //     endpoint: API.getUser,
                //     options: {
                //         method: "POST",
                //         body: JSON.stringify(credentialDetails),
                //     },
                // });

                console.log({ credentialDetails });

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user;
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],

    debug: true,
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, user }: { token: any; user: any }) {
            return { ...token, ...user };
        },
        async session({ session, token }: { session: any; token: any }) {
            session.user = token;

            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: ROUTE.LOGIN,
    },
};
