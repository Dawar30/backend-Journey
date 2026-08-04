import { Router } from "express";
import { getUser, createUser } from "../controller/userController.js";

const router = Router();

router.get("/getUser", getUser);
router.post("/createUser", createUser);

export default router;

