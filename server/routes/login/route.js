import { connectDB } from "@/lib/mongodb";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
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
const token = jwt.sign(
  {
    userId: user._id,
    email: user.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  }
);
const cookieStore = await cookies();

cookieStore.set("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 60 * 60 * 24 * 7,
});
   return Response.json({
  success: true,
  message: "Login Successful",
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