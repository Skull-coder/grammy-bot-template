import { Context as BaseContext, Api, SessionFlavor } from "grammy";
import { HydrateFlavor, HydrateApiFlavor } from "@grammyjs/hydrate";
import { AnyObject } from "../utils/session";
import { User } from "@prisma/client";

export type MyContext = BaseContext &
    HydrateFlavor<BaseContext> &
    SessionFlavor<AnyObject> & {
        user: User | null;
    };

export type MyApi = HydrateApiFlavor<Api>;
