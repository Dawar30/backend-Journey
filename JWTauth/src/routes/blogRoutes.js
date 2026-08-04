import { Router } from "express";
import { newBlogg, getPosts } from "../controller/blogController.js";
import { varifyToken } from "../middleware/authMiddleware.js"

const router = Router()

router.post("/create", varifyToken , newBlogg)
router.get("/posts",getPosts)

export default router