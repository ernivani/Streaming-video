import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (!body.id || !body) {
        return {
            error: "Missing parameters",
        };
    }

    let user;
    let error;

    await prisma.users
        .delete({
            where: {
                id: body.id,
            },
        })
        .then((res) => {
            user = res;
        })
        .catch(async (e) => {
            error = e;
        });

    if (error) {
        return createError({statusCode: 500, message: "Error deleting user"});
    }

    return {
        data: user,
    };

});
