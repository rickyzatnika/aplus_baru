import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 4,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    interested: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      min: 6,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};
const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
