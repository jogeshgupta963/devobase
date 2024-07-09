import { Schedule } from "../models/schedule.js";

class ScheduleController {
    async createSchedule(req, res, next) {
        const {
            recipientEmail,
            recieverEmail,
            emailContents,
            scheduledTime,
            recurring = false,
        } = req.body;
        try {
            if (
                !recipientEmail ||
                !recieverEmail ||
                !emailContents ||
                !scheduledTime
            ) {
                return res.status(401).json({
                    data: "Please Provide needed arguments",
                });
            }

            const newSchedule = new Schedule({
                recipientEmail,
                recieverEmail,
                subject: emailContents.subject,
                body: emailContents.body,
                attachments: emailContents.attachments,
                scheduledTime,
                recurring,
            });
            await newSchedule.save();
            return res.status(201).json({
                success: true,
                data: newSchedule,
            });
        } catch (err) {
            next(err);
        }
    }
    async getSchedule(req, res, next) {
        try {
            const schedules = await Schedule.find({}).lean(true);
            return res.status(200).json({
                success: true,
                data: schedules || [],
            });
        } catch (err) {
            next(err);
        }
    }
    async getScheduleById(req, res, next) {
        try {
            const { id } = req.params;
            const schedule = await Schedule.findById(id);
            return res.status(200).json({
                success: true,
                data: schedule,
            });
        } catch (err) {
            next(err);
        }
    }

    async cancelSchedule(req, res, next) {
        try {
            const { id } = req.params;
            const schedule = await Schedule.findById(id);
            schedule.cancel = true;
            await schedule.save();
            return res.status(200).json({
                success: true,
                data: schedule,
            });
        } catch (err) {
            next(err);
        }
    }
}

export const scheduleController = new ScheduleController();
