import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NuxtAuthHandler } from "#auth";
import { compare } from "bcrypt";

import prismadb from "@/libs/prismadb";
import { generateRandomPassword } from "./utils";

export default NuxtAuthHandler({
    // secret needed to run nuxt-auth in production mode (used to encrypt data)
    secret: process.env.NUXT_SECRET,
    pages: {
        signIn: "/auth/login",
    },
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (!profile) {
                return true;
            }

            const accountUser = await prismadb.user.findFirst({
                where: {
                    email: profile?.email || "",
                    provider: account?.provider || "",
                },
            });

            if (!accountUser) {
                // Create new user
                const newUser = await prismadb.user.create({
                    data: {
                        provider: account?.provider || "",
                        email: profile?.email || "", // Use optional chaining and provide a default value
                        name: profile?.name || "", // Use optional chaining and provide a default value
                        // @ts-ignore This is a valid value, but TS doesn't know about it
                        image: profile?.picture || "", // Use optional chaining and provide a default value
                        emailVerified: new Date(), // Set current date as email verification date
                        password: generateRandomPassword(), // Generate a random password because the user is signing in with a provider
                    },
                });
                if (!newUser) {
                    return false;
                }
            }
            return true;
        },
    },
    providers: [
        // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
        GoogleProvider.default({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
        CredentialsProvider.default({
            name: "Credentials",
            async authorize(credentials: any) {
                if (!credentials.email || !credentials.password) {
                    return null;
                }

                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!user || !user.password) {
                    return null;
                }

                const isCorrectPassword = await compare(
                    credentials.password,
                    user.password
                );
                if (!isCorrectPassword) {
                    return null;
                }

                return user;
            },
        }),
    ],
});
