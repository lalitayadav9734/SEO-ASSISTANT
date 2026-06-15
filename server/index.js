import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/mongodb.js";

// Routes
import register from "./routes/register/route.js";
import login from "./routes/login/route.js";
import user from "./routes/user/route.js";
import setup from "./routes/setup/route.js";
import audit from "./routes/audit/route.js";
import logout from "./routes/logout/route.js";
import meta from "./routes/meta/route.js";
import keywords from "./routes/keywords/route.js";
import { errorMiddleware } from "./config/errorMiddleware.js";


dotenv.config();

const app = express();

// DB
connectDB();

// Middlewares
app.use(cors({
  origin:[
"http://localhost:3000",
"https://seo-assistant-zeta.vercel.app/",
"https://seo-assistant-ticn.vercel.app/"
] ,
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

/*
  ROUTES
*/

app.use("/api/users", user);

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/setup", setup);
app.use("/api/audit", audit);
app.use("/api/meta", meta);
app.use("/api/keywords",keywords);

app.delete("/api/logout", logout);
app.use(errorMiddleware);
/*
  START SERVER
*/
app.listen(5000, () => {
  console.log("Server running on port 5000");
});