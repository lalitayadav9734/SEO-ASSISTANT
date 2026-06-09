import mongoose from "mongoose";

const GeneratedAssetSchema =
  new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      type: {
        type: String,
        required: true,
      },

      input: {
        type: String,
      },

      output: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.models.GeneratedAsset ||
  mongoose.model(
    "GeneratedAsset",
    GeneratedAssetSchema
  );