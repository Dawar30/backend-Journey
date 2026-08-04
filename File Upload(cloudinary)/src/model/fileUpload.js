import mongoose from "mongoose";

const fileDetails = new mongoose.Schema({
    name: {type: String, required: true},
    Address: {type: String, required: true},
    phone: {type: String, required: true},
    fileName: {type: String, required: true},
    fileUrl: {type: String, required: true},
    cratedAt: {type: String, default: Date.now}
})

const file = mongoose.model("file_details",fileDetails)
export default file
 