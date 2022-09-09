import { FileAdapter } from "@grammyjs/storage-file";

export interface AnyObject {
    [x: string]: any;
}

export function initial(): AnyObject {
    return {};
}

export const storage = new FileAdapter({ dirName: "sessions" });
