import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const varifyToken = async (req , res , next) => {
    const token = req.header('Authorization')
    if (!token) {
        return res.status(401).json({Message: "Access denied"})
    }
    try {
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({message: "Invalid token!"})
    }
}