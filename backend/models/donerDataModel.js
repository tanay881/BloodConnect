import mongoose from "mongoose";

const donerDataSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  bloodgroup: { type: String, required: true },
  address: { type: String, required: true },
  location: { type: String, required: true },
  gender: { type: String, required: true },
  phoneno: { type: Number, required: true },
})

const donerDataModel = mongoose.model.donerData || mongoose.model('donerData', donerDataSchema)

export default donerDataModel;