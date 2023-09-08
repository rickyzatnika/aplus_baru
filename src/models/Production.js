import mongoose from "mongoose";

const ProductionSchema = new mongoose.Schema(
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
    place: {
      type: String,
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
const Production = mongoose.model("Production", ProductionSchema);
export default Production;
