import { PrismaClient } from "@prisma/client";
import logger from "../plugins/logger";

export const prisma = new PrismaClient();

export default async () => {
    try {
        await prisma.$connect();

        logger.info("Database connected!");
    } catch (err) {
        if (err instanceof Error) {
            logger.error(err.message);
            await prisma.$disconnect();
        }
    }
};
