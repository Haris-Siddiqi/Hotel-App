import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config(); // Load environment variables

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve React build files from the "frontend/dist" folder
const distPath = path.resolve(__dirname, "../../frontend/dist");
app.use(express.static(distPath));  // Ensure static files are served first

// Middleware
app.use(cors());
app.use(express.json());

// Default route for API
app.get("/api", (req, res) => {
    res.send("Hotel Booking API is running...");
});

// Catch-all route to serve React app for all routes
app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Initialize Sequelize (database)
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

// Use the user routes for the API
app.use('/api', userRoutes);
