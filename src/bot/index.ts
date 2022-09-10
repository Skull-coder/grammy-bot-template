import { Bot } from "grammy";
import config from "../config";
import logger from "../plugins/logger";
import { MyApi, MyContext } from "./types/context";

import middlewares from "./middlewares";
import handlers from "./handlers";
import { errorHandler } from "./handlers/errors";

export const bot = new Bot<MyContext, MyApi>(config.BOT_TOKEN);

export default async (): Promise<void> => {
    await middlewares();
    await handlers();

    const botInfo = await bot.api.getMe();
    logger.info(`Bot @${botInfo.username} has been started`);

    bot.catch(errorHandler);
    await bot.start();
};
