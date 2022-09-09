import { MyConversation, MyContext } from "../types/context";

export async function userRequest(
    conversation: MyConversation,
    ctx: MyContext,
) {
    await ctx.reply("Hello! What is your name?");
    const username = await conversation.waitFor(":text");
    await ctx.reply(
        `Приятно познакомится, ${username.msg.text}. Сколько тебе лет?`,
    );

    const age = await conversation.form.number();
    await ctx.reply(
        `Добро пожаловать в бота, ${username.msg.text}. Вам ${age} лет.`,
    );
}
