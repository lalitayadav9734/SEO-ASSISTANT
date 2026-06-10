import { connectDB } from "@/lib/mongodb";
import GeneratedAsset from "@/models/GeneratedAsset";

export async function POST(req) {
  try {
    await connectDB();

    const {
      userId,
      type,
      input,
      output,
    } = await req.json();

    const asset =
      await GeneratedAsset.create({
        userId,
        type,
        input,
        output,
      });

    return Response.json({
      success: true,
      asset,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message:
          "Failed to save asset",
      },
      {
        status: 500,
      }
    );
  }
}