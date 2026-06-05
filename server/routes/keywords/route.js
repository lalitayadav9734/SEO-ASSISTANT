import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { topic } = await req.json();

    if (!topic) {
      return Response.json(
        {
          success: false,
          message: "Topic is required",
        },
        { status: 400 }
      );
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

    return Response.json({
      success: true,
      data: result.response.text(),
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}