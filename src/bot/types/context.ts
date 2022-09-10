import { Context as BaseContext, Api, SessionFlavor } from "grammy";
import { HydrateFlavor, HydrateApiFlavor } from "@grammyjs/hydrate";
import { User } from "@prisma/client";
import { Conversation, ConversationFlavor } from "@grammyjs/conversations";

export interface SessionState {}

export type MyContext = BaseContext &
    HydrateFlavor<BaseContext> &
    ConversationFlavor &
    SessionFlavor<SessionState> & {
        user: User | null;
    };

export type MyConversation = Conversation<MyContext>;

export type MyApi = HydrateApiFlavor<Api>;
