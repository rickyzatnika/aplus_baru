import mongoose from "mongoose";

const BrandingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      min: 6,
    },
    content: {
        type: String,
        required: true,
      },
    date : {
      type: String,
        required: true,
    },
    category: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};
const Branding = mongoose.model("Branding", BrandingSchema);
export default Branding;
