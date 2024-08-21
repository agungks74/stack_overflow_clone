import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
export const POST = async (request: Request) => {
  const { question } = await request.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    // const response = await fetch("https://api.openai.com/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //       {
    //         role: "system",
    //         content:
    //           "You are a knowledgeable assistant that provides quality information.",
    //       },
    //       {
    //         role: "user",
    //         content: `Tell me ${question}`,
    //       },
    //     ],
    //   }),
    // });

    // const responseData = await response.json();

    // console.log(responseData);
    // const reply = responseData.choices[0].message.content;

    // return NextResponse.json({ reply });const prompt = "Write a story about an AI and magic"

    const result = await model.generateContent(question);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
