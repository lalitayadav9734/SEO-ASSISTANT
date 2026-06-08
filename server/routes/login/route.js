import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } =
      await req.json();

    if (!email || !password) {
      return Response.json(
        {
          success: false,
          message:
            "Email and Password required",
        },
        {
          status: 400,
        }
      );
    }

    const user =
      await User.findOne({
        email,
      });

    if (!user) {
      return Response.json(
        {
          success: false,
          message:
            "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return Response.json(
        {
          success: false,
          message:
            "Invalid Password",
        },
        {
          status: 400,
        }
      );
    }

    return Response.json({
      success: true,
      message:
        "Login Successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
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