import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function meta(req,res) {
  try {
    const { pageName, keyword } = await req.json();

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
Act as an SEO expert.

Generate:

1. SEO Title (max 60 chars)
2. Meta Description (max 160 chars)
3. URL Slug
4. Open Graph Title

Page Name:
${pageName}

Target Keyword:
${keyword}

Format clearly.
`;

    const result = await model.generateContent(prompt);

    return res.json({
      success: true,
      data: result.res.text(),
    });
  } catch (error) {
    return res.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}