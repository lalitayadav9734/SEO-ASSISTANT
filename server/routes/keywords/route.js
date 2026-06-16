import express from "express";
import  keywords  from "../../controllers/keywords.controller.js";
import auth from "../../config/auth.js";
const router = express.Router();

router.post("/", auth,keywords);

export default router;
