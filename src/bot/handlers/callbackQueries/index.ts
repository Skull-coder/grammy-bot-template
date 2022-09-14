import { Composer } from "grammy";
import { MyContext } from "../../types/context";
import { testCallback } from "./test-callback";
import { startCallback } from "./start-callback";

export default async (bot: Composer<MyContext>) => {
    bot.callbackQuery("testCallback", testCallback);
    bot.callbackQuery("start", startCallback);
};
