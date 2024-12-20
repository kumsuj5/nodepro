const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  userType: { type: String, enum: ["Admin", "Customer"], default: "Customer" }, // Restricted to Admin or Customer
});

module.exports = mongoose.model("User", userSchema);
