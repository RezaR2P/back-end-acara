import mongoose from "mongoose";
import {DATABASE_URL} from "../utils/env";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "belajar",
    });
    return Promise.resolve("Database connected successfully");
  } catch (error) {
    return Promise.reject("Failed to connect to the database");
  }
}
export default connectToDatabase;