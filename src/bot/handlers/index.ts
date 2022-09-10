import { bot } from "../";
import { isPrivate } from "../filters";
import commands from "./commands";
import converse from "./conversations";
// You can add callbackQueries here

export default async () => {
    const privateBot = bot.filter(isPrivate);

    await converse(privateBot);
    await commands(privateBot);
};
