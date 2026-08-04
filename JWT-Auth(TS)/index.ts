import express, { type Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import DBconnection from "./config/db.js";
import authRoutes from "./src/routes/auth.routes.js";

const app: Application = express();

// Middleware
app.use(cors({ 
  origin: process.env.FRONTEND_URL ?? true, credentials: true
 }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
DBconnection().then(() => {
  // Start the server after successful DB connection
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
}).catch((error: Error) => {
  console.error("Failed to connect to MongoDB:", error);
});