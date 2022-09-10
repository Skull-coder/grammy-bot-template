import { Context as BaseContext, Api, SessionFlavor } from "grammy";
import { HydrateFlavor, HydrateApiFlavor } from "@grammyjs/hydrate";
import { User } from "@prisma/client";

export interface SessionState {

}

export type MyContext = BaseContext &
    HydrateFlavor<BaseContext> &
    SessionFlavor<SessionState> & {
        user: User | null;
    };

export type MyApi = HydrateApiFlavor<Api>;
