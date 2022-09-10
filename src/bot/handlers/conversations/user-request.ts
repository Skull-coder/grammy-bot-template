import { MyContext, MyConversation } from "../../types/context";

export async function userRequest(conversation: MyConversation, ctx: MyContext) {
    await ctx.reply("Hi there! What is your name?");
    const { message } = await conversation.wait();
    await ctx.reply(`Welcome to the chat, ${message.text}!`);
}
