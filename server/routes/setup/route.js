import express from "express";
import setup from "../../controllers/setup.controller.js";
import auth from "../../config/auth.js";
import { validateSetup } from "../../config/validateSetup.js";
import { errorMiddleware } from "../../config/errorMiddleware.js";

const router = express.Router();

router.post("/",auth,validateSetup,errorMiddleware, setup);

export default router;