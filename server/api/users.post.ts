import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    console.log(body);

    if (!body) {
        return {
            error: "Missing parameters 1",
        };
    }

    if (!body.name || !body.email || !body.password) {
        return {
            error: "Missing parameters 2",
            name: body.name ? true : false,
            email: body.email ? true : false,
            password: body.password ? true : false,
        };
    }

    const user = await prisma.users.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password,
        },
    });

    if (!user) {
        return {
            error: "Error creating user",
        };
    }

    return {
        data: user,
    };
});
