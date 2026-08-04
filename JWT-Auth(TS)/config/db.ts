import mongoose from "mongoose";

const DBconnection = async (): Promise<void> => {
  try {
    const mongoUri = process.env.Mongo_URI;

    if (!mongoUri) {
      throw new Error("Mongo_URI is not defined in environment variables");
    }

    const conn = await mongoose.connect(mongoUri);

    console.log(`MongoDB connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default DBconnection;