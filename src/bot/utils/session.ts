import { FileAdapter } from "@grammyjs/storage-file";

export const storage = new FileAdapter({ dirName: "sessions" });
