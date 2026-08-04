import { createBlog, getBlogs,deleteBlog,getAllBlogs } from "../controllers/blog.controller.js"; 
import { Router } from "express";
import { verifyToken } from "../middlewares/validateToken.js"

const Blogrouter = Router()

Blogrouter.post("/newBlog",verifyToken,createBlog)
Blogrouter.get("/getBlog",verifyToken,getBlogs)
Blogrouter.get("/getAll",getAllBlogs)
Blogrouter.delete("/delete",verifyToken,deleteBlog)


export default Blogrouter