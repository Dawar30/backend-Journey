import mongoose from "mongoose";

const users = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    age: {type: Number, required: true},
    role: {type: String, required: true},
})

const user = new mongoose.model("Users",users)

export default user