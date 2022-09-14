import { InlineKeyboard } from "grammy";

export async function testCallback(ctx) {
    const keyboard = new InlineKeyboard().text("🔙 Back", "start");

    await ctx.editMessageText("Callback Test", {
        reply_markup: keyboard,
    });
}
