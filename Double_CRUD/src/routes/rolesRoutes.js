import { getRoles,createRole } from "../controller/permissionController.js"
import { Router } from "express"

const router = Router();

router.get("/getRoles",getRoles)
router.post("/createRole",createRole)

export default router;
