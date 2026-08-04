import mongoose from "mongoose";

const blogs = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true}
},
{
    timestamps: true
})


const blog = mongoose.model("blogs",blogs);
export default blog;