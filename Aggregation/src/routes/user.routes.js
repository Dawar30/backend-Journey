import { createUser,logIn } from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router()

router.post("/signUp",createUser)
router.post("/login",logIn)


export default router