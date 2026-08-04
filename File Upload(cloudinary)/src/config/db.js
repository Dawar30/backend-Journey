import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const DBconnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.Mongo_URI);
        console.log(`Mongo connected successfully ${connection}`);
    } catch (error) {
        console.log("Error:",error);
    }
}

export default DBconnection;