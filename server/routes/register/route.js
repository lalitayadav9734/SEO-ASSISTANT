import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password } =
      await req.json();

    if (!name || !email || !password) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    const existingUser =
      await User.findOne({
        email,
      });

    if (existingUser) {
      return Response.json(
        {
          success: false,
          message:
            "User already exists",
        },
        { status: 400 }
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password:
        hashedPassword,
    });

    return Response.json({
      success: true,
      message:
        "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message:
          "Internal Server Error",
      },
      { status: 500 }
    );
  }
}