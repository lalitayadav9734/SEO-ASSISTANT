import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function keywords(req, res) {
  try {
    const { topic } = req.body;

    if (!topic) {
      return res.status(400).json({
        success: false,
        message: "Topic is required",
      });
    }

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
Act as an SEO Specialist.

Generate:

1. Primary Keywords
2. Secondary Keywords
3. Long Tail Keywords
4. Search Intent

Topic: ${topic}

Format the response clearly.
`;

    const result = await model.generateContent(prompt);

    return res.json({
      success: true,
      data: result.response.text(),
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}