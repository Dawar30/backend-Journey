import { Router } from "express";
import {createStudent , getStudent, updateStudent, deleteStudent} from "../controller/studentController.js"


const router = Router()

router.get("/getStudent", getStudent);
router.get("/getStudent/:id", getStudent);
router.post("/createStudent",createStudent)
router.put("/updateStudent/:id",updateStudent);
router.delete("/deleteStudent/:id",deleteStudent);

export default router;