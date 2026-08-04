import mongoose, { model, Schema } from "mongoose";

const blog = new mongoose.Schema({
    content : {type: String, required: true},
    createdBy: {type: Schema.Types.ObjectId, ref: "user",required: true},
},
{
    timestamps: true
}
)

const Blog = new mongoose.model("blog",blog)
export default Blog