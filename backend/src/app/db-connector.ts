require("dotenv").config();
import * as mongoose from "mongoose";

const connectMongo = async (mongoUrl: string) => {
    try {
        await mongoose.connect(mongoUrl);
    } catch (error) {
        console.log("error ", error);
        process.exit(1);
    }
};

export default {
    connectMongo,
};
