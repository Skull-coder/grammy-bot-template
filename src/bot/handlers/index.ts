import { userComposer } from "../";
import commands from "./commands";
import callbackQueries from "./callbackQueries";
import converse from "./conversations";

export default async () => {
    await converse(userComposer);
    await callbackQueries(userComposer);
    await commands(userComposer);
};
