import { InlineKeyboard } from "grammy";

export async function adminCommand(ctx) {
    const text = `
<b>ADMIN COMMAND</b>
`;
    const keyboard = new InlineKeyboard().text("ADMIN CALLBACK", "testAdminCallback");

    await ctx.reply(text, {
        reply_markup: keyboard,
    });
}
