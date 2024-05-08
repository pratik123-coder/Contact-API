import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI, {
        dbName: DB_NAME,
        });
        console.log(`Connected to MongoDB at ${connectionDB.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

export {connectDB};