import { UserRoles } from "@prisma/client";
import { MyContext } from "../types/context";

export function isAdmin(ctx: MyContext) {
    return ctx.user.role === UserRoles.ADMIN;
}
