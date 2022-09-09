import { bot } from "..";
import { createConversation } from "@grammyjs/conversations";

import { userRequest } from "./user-request";

export default async () => {
    bot.use(createConversation(userRequest));
};
