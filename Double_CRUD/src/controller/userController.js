import user from "../models/user.js";

export const getUser = async (req, res) => {
    try {
        const users = await user.find().populate("role");
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: "Not found any user" });
        console.log("Error: ", error);
    }
}

export const createUser = async (req, res) => {
    try {
        const { name, roleId } = req.body;
        const newUser = await user.create({ name: name, role: roleId });
        res.status(200).json({ message: "User created successfuly!" ,newUser});
    } catch (error) {
        res.status(400).json({ message: "Can not create user!" });
        console.log(error);
    }
}