import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define MONGODB_URI in .env"
  );
}

export async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}