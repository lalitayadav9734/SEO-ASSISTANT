import express from "express";
import  audit  from "../../controllers/audit.controller.js";
import auth from "../../config/auth.js";
const router = express.Router();

router.post("/",auth, audit);

export default router;