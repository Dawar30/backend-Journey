import user from "../model/user.js";
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()

export const signUp = async (req, res) => {
    try {
        const { name, email, password, age, role } = req.body;
        console.log(process.env.saltRounds)
        const hashedPassword = await bcrypt.hash(password, Number(process.env.saltRounds));
        const checkUser = await user.find({ email });
        console.log(checkUser)
        if (checkUser.length != 0) {
            return res.status(400).json({ message: "User already exists!" })
        }
        const newUser = await user.create({
            name,
            email,
            password: hashedPassword,
            age,
            role
        })
        res.status(200).json({ message: "Success User created" }, newUser.name, newUser.role);


    } catch (error) {
        res.status(500).json({ message: "Can't create user!" })
        console.log(error)
    }
}

export const logIn = async (req, res) => {
    try {
        const {email, password } = req.body
        const checkUser = await user.find({email})
        if (checkUser.length == 0){
            return res.status(401).json({Message : "User not found"})
        }
        const validateUser = await bcrypt.compare(password,checkUser[0].password)
        if(!validateUser){
            return res.status(401).json({Message: "Wrong password!"})
        }
        const token = jwt.sign({userID : checkUser[0]._id},process.env.SECRET_KEY,{expiresIn: '1h'})
        res.status(200).json(token)
    } catch (error) {
        res.status(500).json({message :"Login failed!"})
        console.log(error)
    }
}