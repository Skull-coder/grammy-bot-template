import { conversations } from "@grammyjs/conversations";
import { hydrateContext } from "@grammyjs/hydrate";
import { parseMode } from "@grammyjs/parse-mode";
import { apiThrottler } from "@grammyjs/transformer-throttler";
import { session } from "grammy";
import { bot } from "../";
import { initial, storage } from "../utils/session";
import { authMiddleware } from "./auth";

export default async () => {
    bot.api.config.use(apiThrottler());
    bot.api.config.use(parseMode("HTML"));

    bot.use(session({ initial, storage }));
    bot.use(conversations());
    bot.use(hydrateContext());

    bot.use(authMiddleware);
};
