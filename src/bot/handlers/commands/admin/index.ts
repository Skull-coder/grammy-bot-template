import { Composer } from "grammy";
import { isPrivate, isAdmin } from "../../../filters";
import { MyContext } from "../../../types/context";
import { adminCommand } from "./admin-command";

export default async (bot: Composer<MyContext>) => {
    bot.command("admin", adminCommand);
};
