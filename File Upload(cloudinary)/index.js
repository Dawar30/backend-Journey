import express from "express"
import dotenv from "dotenv"
import DBconnection from './src/config/db.js'
import router from "./src/routes/userRoute.js"


dotenv.config()

const app = express()
const port = process.env.PORT

DBconnection()

app.use(express.json())

app.use("/api",router)

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})