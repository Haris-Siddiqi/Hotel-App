import express from "express"; // Use import here
import User from "../models/User.js"; // Ensure it’s using ES Module import

const router = express.Router();

// Create a new user
router.post("/users", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Create a new user in the database
    const newUser = await User.create({ username, email, password });
    
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router; // Use ES Module export
