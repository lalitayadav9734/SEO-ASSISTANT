import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash"
});

app.post("/api/keywords", async (req, res) => {
  try {
    const { topic } = req.body;

    const prompt = `
      Act as an SEO specialist.

      Generate:
      1. Primary Keywords
      2. Secondary Keywords
      3. Long Tail Keywords
      4. Search Intent

      Topic:
      ${topic}
    `;

    const result =
      await model.generateContent(prompt);

    res.json({
      success: true,
      data: result.response.text()
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});