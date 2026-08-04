import mongoose from "mongoose";


const userModel = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    Image: { type: Object, required: true },
},
    {
        timestamps: true
    })

const user = new mongoose.model("user", userModel)
export default user