import bcrypt from "bcrypt";
import prismadb from "@/libs/prismadb";

export default defineEventHandler(async (event: any) => {
    if (event.req.method !== "POST") {
        return {
            error: "Method not allowed",
        };
    }

    const body = await readBody(event);

    const { name, email, password, passwordRepeat } = body;

    console.log(body);
    if (!name || !email || !password || !passwordRepeat) {
        return {
            error: "Missing fields",
        };
    }

    if (password !== passwordRepeat) {
        return {
            error: "Passwords don't match",
        };
    }

    const userExists = await prismadb.user.findFirst({
        where: {
            email,
        },
    });

    if (userExists) {
        return {
            error: "User already exists",
        };
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await prismadb.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            image: "https://avatars.githubusercontent.com/u/25911230?v=4",
        },
    });

    if (!user) {
        return {
            error: "Failed to create user",
        };
    }

    return {
        user,
    };
});
