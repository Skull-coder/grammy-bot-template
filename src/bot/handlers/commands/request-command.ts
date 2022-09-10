import { MyContext } from "../../types/context";

export async function requestCommand(ctx: MyContext) {
    await ctx.conversation.enter("userRequest");
}
