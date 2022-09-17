import { adminBot, userBot } from "../";
import adminCommands from "./commands/admin";
import adminQueries from "./callbackQueries/admin";
import commands from "./commands";
import callbackQueries from "./callbackQueries";
import converse from "./conversations";

export default async () => {
    await adminQueries(adminBot);
    await adminCommands(adminBot);

    await converse(userBot);
    await callbackQueries(userBot);
    await commands(userBot);
};
