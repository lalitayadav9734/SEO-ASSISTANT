import express from "express";
import  audit  from "../../controllers/audit.controller.js";

const router = express.Router();

router.post("/", audit);

export default router;