import { Router } from "express";
import upload from "../middleware/multer.js"
import {cloudinaryUpload,getUsers,deleteUser} from "../controller/uploadController.js"


const router = Router()

router.post("/upload",upload.single("image"),cloudinaryUpload)
router.get("/users",getUsers)
router.delete("/deleteOne:id",deleteUser)

export default router

