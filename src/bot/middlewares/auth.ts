import { NextFunction } from "grammy";
import { prisma } from "../../database";
import { MyContext } from "../types/context";

async function authMiddleware(ctx: MyContext, next: NextFunction) {
    if (ctx.from.is_bot) return;
    if (!ctx.from || !ctx.from.id) return;

    const { username } = ctx.from;

    const user = await prisma.user.upsert({
        where: {
            telegramId: ctx.from.id,
        },
        create: {
            telegramId: ctx.from.id,
            username,
        },
        update: {
            username,
        },
    });

    ctx.user = user;

    await next();
}

export { authMiddleware };
