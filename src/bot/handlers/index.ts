import { bot } from "../";
import { isPrivate } from "../filters";
import commands from "./commands";
// You can add callbackQueries here

export default async () => {
    const privateBot = bot.filter(isPrivate);

    await commands(privateBot);
};
