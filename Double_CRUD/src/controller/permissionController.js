import role from "../models/roles.js"

export const getRoles = async (req , res ) => {
    try {
        const roles = await role.find();
        res.status(200).json(roles);

    } catch (error) {
        res.status(404).json({Message: "No role found!"});
        console.log("Error: ",error);
    }
}

export const createRole = async (req , res) => {
    try {
        const {name, permissions} = req.body;
        const newRole = await role.create({name,permissions});
        res.status(200).json({message:"role created succesfully", newRole});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Can not create role"});
    }
}