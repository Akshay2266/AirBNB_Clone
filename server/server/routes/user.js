import express from "express";
import { registerUser, loginUser, getUserById } from "../controllers/user.js";

const router = express.Router();

// Route to register a new user
router.post("/register", registerUser);

// Route to login a user
router.post("/login", loginUser);

// Route to get a user by ID
router.get("/:id", getUserById);

export default router;
