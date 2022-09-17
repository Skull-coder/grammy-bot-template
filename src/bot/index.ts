import { Bot, Composer } from "grammy";
import config from "../config";
import logger from "../plugins/logger";
import { MyApi, MyContext } from "./types/context";

import middlewares from "./middlewares";
import handlers from "./handlers";
import { errorHandler } from "./handlers/errors";
import { isAdmin, isPrivate } from "./filters";

export const bot = new Bot<MyContext, MyApi>(config.BOT_TOKEN);

export const userComposer = new Composer<MyContext>();
export const adminComposer = new Composer<MyContext>();

export const userBot = userComposer.filter(isPrivate);
export const adminBot = adminComposer.filter(isPrivate).filter(isAdmin);

export default async (): Promise<void> => {
    await middlewares();
    await handlers();

    const botInfo = await bot.api.getMe();
    logger.info(`Bot @${botInfo.username} has been started`);

    bot.catch(errorHandler);
    await bot.start();
};
