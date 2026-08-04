import e from "express"
import dotenv from "dotenv"
import DBconnection from "./src/config/db.js"
import userRoutes from "./src/routes/userRoutes.js"
import blogRoutes from "./src/routes/blogRoutes.js"



dotenv.config()
DBconnection()

const app = e()
const port = 3000

app.use(e.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/user", userRoutes)
app.use("/api/blog",blogRoutes)


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${process.env.port}`)
})
