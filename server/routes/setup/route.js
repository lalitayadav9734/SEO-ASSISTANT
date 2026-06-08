import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const {
      userId,
      websiteName,
      websiteUrl,
      industry,
      targetCountry,
      targetAudience,
      primaryKeywords,
    } = await req.json();

    const updatedUser =
      await User.findByIdAndUpdate(
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

    if (!updatedUser) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json({
      success: true,
      message:
        "Website setup completed",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message:
          "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}