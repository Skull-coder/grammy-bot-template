import { MyConversation, MyContext } from "../types/context";

export async function userRequest(
    conversation: MyConversation,
    ctx: MyContext,
) {
    await ctx.reply("Hello! What is your name?");
    const username = await conversation.waitFor(":text");
    await ctx.reply(`Nice to meet you ${username.msg.text}. How old are you?`);

    const age = await conversation.form.number();
    await ctx.reply(
        `Welcome to the bot, ${username.msg.text}. You are ${age} years old.`,
    );
}
