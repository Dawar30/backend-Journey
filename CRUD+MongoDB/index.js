import e from "express";
import dotenv from "dotenv"
import DBconnection from "./src/config/db.js"
import studentsRoutes from "./src/routes/studentsRoutes.js";

dotenv.config()

const app = e();
const port = process.env.port;

app.use(e.json());

DBconnection();


app.use("/api/student",studentsRoutes);




app.listen(port, (req, res) =>{
    console.log(`Server running on port http://localhost:${port}`)
})