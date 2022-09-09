import { Context as BaseContext, Api, SessionFlavor } from "grammy";
import { HydrateFlavor, HydrateApiFlavor } from "@grammyjs/hydrate";
import { ConversationFlavor, Conversation } from "@grammyjs/conversations";
import { AnyObject } from "../utils/session";
import { User } from "@prisma/client";

export type MyContext = BaseContext &
    HydrateFlavor<BaseContext> &
    SessionFlavor<AnyObject> &
    ConversationFlavor & {
        user: User | null;
    };

export type MyApi = HydrateApiFlavor<Api>;

export type MyConversation = Conversation<MyContext>;
