import { conversations } from "@grammyjs/conversations";
import { hydrateApi, hydrateContext } from "@grammyjs/hydrate";
import { parseMode } from "@grammyjs/parse-mode";
import { apiThrottler } from "@grammyjs/transformer-throttler";
import { session } from "grammy";
import { bot, userComposer } from "../";
import { MyContext, SessionState } from "../types/context";
import { storage } from "../utils/session";
import { authMiddleware } from "./auth";

export default async () => {
    bot.api.config.use(apiThrottler());
    bot.api.config.use(parseMode("HTML"));
    bot.api.config.use(hydrateApi());

    bot.use(session<SessionState, MyContext>({ initial: () => ({}), storage }));
    bot.use(conversations());
    bot.use(hydrateContext());

    bot.use(userComposer);
    bot.use(authMiddleware);
};
