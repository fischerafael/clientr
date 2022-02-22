import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.models.User || mongoose.model("User", Schema);

export { User };
