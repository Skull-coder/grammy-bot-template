import "./plugins/logger";
import "dotenv/config";

import bot from "./bot";
import database from "./database";

(async (): Promise<void> => {
    await database();
    await bot();
})();
