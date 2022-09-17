import { Composer } from "grammy";
import { MyContext } from "../../../types/context";
import { adminCallback } from "./admin-callback";
import { testAdminCallback } from "./test-admin-callback";

export default async (bot: Composer<MyContext>) => {
    bot.callbackQuery("testAdminCallback", testAdminCallback);
    bot.callbackQuery("admin", adminCallback);
};
