import User from "../../models/user.js";

export default async function user(
  req,
  res
)
 
{
  console.log("USER ROUTE HIT");
  try {
    const user = await User.findById(
      req.user.userId
    ).select("-password");

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
}