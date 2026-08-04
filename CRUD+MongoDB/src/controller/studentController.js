import student from "../models/students.js";

export const createStudent = async (req, res) => {
    try {
        const { name, age, section, Department } = req.body;
        const Users = await student.create({ name, age, section, Department });

        res.status(200).json(Users);
    } catch (error) {
        return res.status(500).json({ Message: "Can not create user" });
    }
}

export const getStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const qParams = req.query;

        if (id) {
            const studentById = await student.findOne({"_id": id});
            return res.status(200).json(studentById);
        }
        if (qParams) {
            const students = await student.find(qParams);
            return res.status(200).json(students);
        }
        const students = await student.find();
        res.status(200).json(students);
    } catch (error) {
        console.log(error);
        res.status(404).json({ Message: "No user found!" });
    }
}


export const updateStudent = async (req, res, next) => {
    try {
        const id = req.params.id;


        const updateData = req.body;

        const updatedStudent = await student.findByIdAndUpdate(id, updateData, { new: true });

        console.log("User updated successfully");
        res.status(200).json(updatedStudent);

    } catch (error) {
        console.log(error);
        return res.status(404).json({ Message: "User not found!" });
    }
}


export const deleteStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(id);

        const deleteData = req.body;

        const deleteOneStudent = await student.findByIdAndDelete(id, deleteData);


        console.log("User deleted successfully");
        res.status(200).json({ Message: "Deleted student successfully" }, deleteOneStudent);

    } catch (error) {
        console.log(error);
        return res.status(404).json({ Message: "User not found!" });
    }
}