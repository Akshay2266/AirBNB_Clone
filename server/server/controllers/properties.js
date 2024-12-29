import Property from "../models/properties.js"; // Import the Property model using ES Modules

// Get all properties
export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find(); // Fetch all properties from the database
    res.status(200).json(properties); // Send the properties as a JSON response
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch properties", error });
  }
};

// Get a single property by ID
export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id); // Find a property by its ID
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch property", error });
  }
};

// Create a new property
export const createProperty = async (req, res) => {
  try {
    const newProperty = new Property(req.body); // Create a new property instance with request body data
    const savedProperty = await newProperty.save(); // Save the property to the database
    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(500).json({ message: "Failed to create property", error });
  }
};

// Update an existing property
export const updateProperty = async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );
    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(updatedProperty);
  } catch (error) {
    res.status(500).json({ message: "Failed to update property", error });
  }
};

// Delete a property
export const deleteProperty = async (req, res) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.params.id); // Delete a property by ID
    if (!deletedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete property", error });
  }
};
