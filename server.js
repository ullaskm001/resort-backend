import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// connect database
connectDB();

// routes
app.use("/api/bookings", bookingRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
