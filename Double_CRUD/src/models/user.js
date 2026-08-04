import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {type: String, required: true},
    role: {type: Schema.Types.ObjectId , ref: 'roles'}
})

const user = mongoose.model("User", User);
export default user;

