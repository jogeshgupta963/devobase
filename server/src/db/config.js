import mongoose from "mongoose";

export const connection = async (uri) => {
    return mongoose.connect(uri);
};
