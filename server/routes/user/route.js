import express from "express";
import user from "../../controllers/user.controller.js";
import auth from "../../config/auth.js";

const router = express.Router();

router.get("/",auth, user);

export default router;