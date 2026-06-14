import express from "express";
import  meta  from "../../controllers/meta.controller.js";

const router = express.Router();

router.post("/", meta);

export default router;