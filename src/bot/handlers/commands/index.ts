import { Composer } from "grammy";
import { MyContext } from "../../types/context";
import { requestCommand } from "./request-command";
import { startCommand } from "./start-command";

export default async (bot: Composer<MyContext>) => {
    bot.command("start", startCommand);
    bot.command("request", requestCommand);
};
