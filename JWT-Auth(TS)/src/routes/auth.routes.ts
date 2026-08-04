import { loginUser, logoutUser, registerUser } from "../controllers/auth.controller.js";
import { authenticateUser } from "../middlewares/auth.js";
import { Router } from "express";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authenticateUser, logoutUser);

export default router;