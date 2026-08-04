import e from "express";
import dotenv from "dotenv";
import dbConnection from "./src/config/db.js";
import user from "./src/routes/userRoutes.js";
import role from "./src/routes/rolesRoutes.js";

dotenv.config()

dbConnection()

const app = e();
const port = process.env.port;

app.use(e.json())


app.use("/api/user",user);
app.use("/api/roles",role);

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
})