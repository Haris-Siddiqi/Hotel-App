import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"; // Use import here

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
    res.send("Hotel Booking API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/// Initializing Sequelize
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully");
        
        await sequelize.sync();
        console.log("Tables synced");
    } catch (error) {
        console.error("Database connection failed", error);
    }
};

startServer();

// Use the user routes
app.use('/api', userRoutes); // ✅ Using import
