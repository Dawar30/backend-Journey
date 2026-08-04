import mongoose from "mongoose";

const roles = new mongoose.Schema({
    name: {type: String, required: true},
    permissions: {type: String, required: true}
})


const role = mongoose.model("roles",roles);
export default role;