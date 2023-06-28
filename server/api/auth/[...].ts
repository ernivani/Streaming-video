// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";

export default NuxtAuthHandler({
    providers: [
        // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: "enter-your-client-id-here",
            clientSecret: "enter-your-client-secret-here",
        }),
    ],
});
