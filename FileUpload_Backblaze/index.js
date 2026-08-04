import e from "express"
import dotenv from "dotenv"
import DBconnection from "./src/config/db.js"
import router from "./src/routes/user.route.js"


dotenv.config()
DBconnection()


const app = e()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use("/api",router)

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`)
})
