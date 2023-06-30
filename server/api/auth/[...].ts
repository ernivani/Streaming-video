import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";
import { compare } from "bcrypt";

import prismadb from "@/libs/prismadb";

export default NuxtAuthHandler({
    // secret needed to run nuxt-auth in production mode (used to encrypt data)
    secret: process.env.NUXT_SECRET,
    pages: {
        signIn: "/auth/login",
    },
    providers: [
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
