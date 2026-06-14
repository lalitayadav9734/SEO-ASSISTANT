import express from "express";
import  keywords  from "../../controllers/keywords.controller.js";

const router = express.Router();

router.post("/", keywords);

export default router;
