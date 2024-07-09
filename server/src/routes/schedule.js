import express from "express";
import { scheduleController } from "../controller/schedule.js";

export const router = express.Router();

router
    .route("/")
    .post(scheduleController.createSchedule)
    .get(scheduleController.getSchedule);

router
    .route("/:id")
    .get(scheduleController.getScheduleById)
    .delete(scheduleController.cancelSchedule);
