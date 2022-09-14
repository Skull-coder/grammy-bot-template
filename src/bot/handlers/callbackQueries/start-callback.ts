import { InlineKeyboard } from "grammy";

export async function startCallback(ctx) {
    const text = `
    <b>Welcome,if you see this message, you have successfully installed the template: <i>https://github.com/Skull-coder/grammy-bot-template</i></b>
    `;
    
    const keyboard = new InlineKeyboard().text("CALLBACK", "testCallback");

    await ctx.editMessageText(text, {
        reply_markup: keyboard,
    });
}
