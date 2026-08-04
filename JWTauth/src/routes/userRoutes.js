import { signUp , logIn} from "../controller/userLogs.js";
import { Router } from "express";

const router = Router()

router.post("/signUp",signUp)
router.post("/logIn",logIn)

export default router