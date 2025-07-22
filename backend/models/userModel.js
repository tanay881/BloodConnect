import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required:true },
  donerDetails: { type: Object, default: {} }
}, {minimize: false})

// The schema option `{ minimize: false }` ensures that empty objects are saved as-is in the database, rather than being removed. By default, Mongoose removes empty objects from documents before saving. Setting `minimize: false` preserves empty objects, which can be useful for fields like `donerDetails` that may start empty but are expected to exist in the document structure.

const userModel = mongoose.model.user || mongoose.model('user', userSchema)

export default userModel;