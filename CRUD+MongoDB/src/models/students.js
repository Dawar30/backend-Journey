import mongoose from "mongoose";

const studentSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    status:{type: String, required: true},
    section: {type: String, required: true},
    Department: {type: String, required: true},
})

const student = mongoose.model("student_records",studentSchema);
export default student;