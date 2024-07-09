import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router as scheduleRouter } from "./routes/schedule.js";
import { errorHandler } from "./middleware/err.js";

export const app = express();
//configs
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
//routes
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: "running...",
    });
});
app.use("/schedule-email", scheduleRouter);
app.all("*", async (req, res) => {
    res.json("Not Found");
});
app.use(errorHandler);
