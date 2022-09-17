import { InlineKeyboard } from "grammy";

export async function testAdminCallback(ctx) {
    const keyboard = new InlineKeyboard().text("🔙 Back admin", "admin");

    await ctx.editMessageText("Admin Callback Test", {
        reply_markup: keyboard,
    });
}
