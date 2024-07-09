import mongoose from "mongoose";

const Schema = new mongoose.Schema(
    {
        recipientEmail: {
            type: String,
        },
        recieverEmail: {
            type: String,
        },
        subject: {
            type: String,
        },
        body: {
            type: String,
        },
        attachments: {
            type: String,
        },
        scheduledTime: {
            type: String,
        },
        recurring: {
            type: Boolean,
            default: false,
        },
        cancel: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);
export const Schedule = mongoose.model("Schedule", Schema);
