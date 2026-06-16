import express from "express";
import  meta  from "../../controllers/meta.controller.js";
import auth from "../../config/auth.js";

const router = express.Router();

router.post("/", auth,meta);

export default router;