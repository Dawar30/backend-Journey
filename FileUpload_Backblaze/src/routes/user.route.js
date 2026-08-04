import Router from "express"
import { uploadFile , getUserInfo } from "../controller/b2.controller.js"
import upload from "../middleware/multer.js"

const router = Router()

router.post("/create",upload.single("Image"),uploadFile)
router.get("/getUser", getUserInfo)

export default router

