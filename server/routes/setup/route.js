import express from "express";
import setup from "../../controllers/setup.controller.js";

const router = express.Router();

router.post("/", setup);

export default router;