import User from "../models/user.js";

console.log("SETUP FILE LOADED");

export default async function setup(req, res) {
  try {
    const {
      userId,
      websiteName,
      websiteUrl,
      industry,
      targetCountry,
      targetAudience,
      primaryKeywords,
    } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      {
        websiteName,
        websiteUrl,
        industry,
        targetCountry,
        targetAudience,
        primaryKeywords,
      },
      {
        new: true,
      }
    );

    return res.json({
      success: true,
      message: "Setup Saved",
      user,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}