import { MyContext } from "../../types/context";

export async function startCommand(ctx: MyContext) {
    const text = `
<b>Welcome,if you see this message, you have successfully installed the template: <i>https://github.com/Skull-coder/grammy-bot-template</i></b>
`;

    await ctx.reply(text);
}
