import { app } from "./app.js";
import { connection } from "./db/config.js";
import "dotenv/config";
// import { reloadCoinGeckoDataCron } from "./utils/helper/cron";
function checkEnv() {
    const env = ["PORT", "NODE_ENV", "MONGO_URI"];
    env.forEach((data) => {
        if (!process.env[data]) {
            console.log(`${data} env not found`);
            process.exit(1);
        }
    });
}
// const cron = async () => {
//     try {
//         await reloadCoinGeckoDataCron();
//     } catch (error) {
//         console.log(error);
//     }
// };
async function initServer() {
    checkEnv();
    const port = process.env.PORT;
    try {
        await connection(process.env.MONGO_URI);
        // cron();
        console.log("Connected to Mongodb");
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }

    return app.listen(port, () => {
        console.log("Server listening on PORT ", port);
    });
}

initServer();
