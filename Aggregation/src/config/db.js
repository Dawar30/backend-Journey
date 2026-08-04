import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongoDB_URI);
        console.log(`MongoDB connected successfuly ${conn}`);
        
    } catch (error) {
        console.log("Did not connected",error);
    }
    
}

export default dbConnection
