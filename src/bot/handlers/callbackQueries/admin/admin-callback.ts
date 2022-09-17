import { InlineKeyboard } from "grammy";

export async function adminCallback(ctx) {
    const text = `
<b>ADMIN COMMAND</b>
`;
    const keyboard = new InlineKeyboard().text(
        "ADMIN CALLBACK",
        "testAdminCallback",
    );

    await ctx.editMessageText(text, {
        reply_markup: keyboard,
    });
}
