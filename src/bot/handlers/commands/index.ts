import { Composer } from "grammy";
import { MyContext } from "../../types/context";
import { requestCommand } from "./request-command";
import { startCommand } from "./start-command";

export default async (privateBot: Composer<MyContext>) => {
    privateBot.command("start", startCommand);
    privateBot.command("request", requestCommand);
};
