import { createConversation } from "@grammyjs/conversations"
import { Composer } from "grammy"
import { MyContext } from "../../types/context"
import { userRequest } from "./user-request"

export default async (bot: Composer<MyContext>) => {
    bot.use(createConversation(userRequest))
}