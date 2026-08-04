import e from "express";
import dotenv from "dotenv";
import dbConnection from "./src/config/db.js";
import router from "./src/routes/user.routes.js";
import Blogrouter from "./src/routes/blog.routes.js"

dotenv.config()

dbConnection()

const app = e();
const port = process.env.port;

app.use(e.json())

app.use("/api",router)
app.use("/api",Blogrouter)


app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
})