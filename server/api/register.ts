import bcrypt from "bcrypt";
import prismadb from "@/libs/prismadb";

export default defineEventHandler(async (event: any) => {
    if (event.req.method !== "POST") {
        return {
            error: "Method not allowed",
        };
    }

    const body = await readBody(event);

    const { name, email, password } = body;

    if (!name || !email || !password) {
        return {
            error: "Missing fields",
        };
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await prismadb.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            image: 'https://avatars.githubusercontent.com/u/25911230?v=4'
        },
    });

    return {
        user,
    };
});
