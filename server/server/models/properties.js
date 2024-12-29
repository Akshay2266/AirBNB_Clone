import mongoose from "mongoose"; // Import mongoose using ES Modules

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    images: [{ type: String }], // Array of image URLs
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user model
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt timestamps
);

// Export the model using ES Modules syntax
export default mongoose.model("Property", propertySchema);
