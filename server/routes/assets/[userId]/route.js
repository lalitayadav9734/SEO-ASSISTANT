import { connectDB } from "@/lib/mongodb";
import GeneratedAsset from "@/models/GeneratedAsset";

export async function GET(
  req,
  { params }
) {
  try {
    await connectDB();

    const assets =
      await GeneratedAsset.find({
        userId:
          params.userId,
      }).sort({
        createdAt: -1,
      });

    return Response.json({
      success: true,
      assets,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}