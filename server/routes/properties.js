import express from "express";
import {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controllers/properties.js"; // Use ES module imports

const router = express.Router();

router.get("/", getAllProperties); // Route to get all properties
router.get("/:id", getPropertyById); // Route to get a property by ID
router.post("/", createProperty); // Route to create a new property
router.put("/:id", updateProperty); // Route to update a property by ID
router.delete("/:id", deleteProperty); // Route to delete a property by ID

export default router; // Use ES module export
